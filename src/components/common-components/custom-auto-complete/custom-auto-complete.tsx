import {type ChangeEvent,type JSX,type SyntheticEvent,type UIEvent, useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, CircularProgress, Paper, Typography, alpha } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/system";

import { useDebounce } from "use-debounce";

import { theme } from "../../../utils/theme";
import { errorStyle } from "../custom-input/widgets/custom-input-styles";
import "./custom-auto-complete.css";

export type Options = {
	key: string;
	value: string;
	hide?: boolean;
	description?: string;
	type?: string;
	child?: JSX.Element;
	color?: string;
}[];
export type Options2 = { label: string; value: string }[];

export type CustomAutoCompleteOptions = {
  key: string;
  value: string;
  // eslint-disable-next-line no-undef
  child?: JSX.Element;
  info?: string;
  hide?: boolean;
  groupBy?: string;
};
export type CustomAutoCompleteOptionsArray = CustomAutoCompleteOptions[];

type CustomAutoCompleteProps = {
  options: CustomAutoCompleteOptionsArray;
  value?: string;
  name?: string;
  loading?: boolean;
  loadingText?: boolean;
  placeHolderColor?: boolean;
  disableOptionsOnSelect?: boolean;
  onChange: (selectedValue: string | "") => void;
  onClick?: () => void;
  onDebounceCall?: (selectedValue: string | "") => void;
  onInputEmpty?: () => void;
  width?: string;
  hasError?: boolean;
  errorMessage?: string;
  placeholder?: string;
  isDisabled?: boolean;
  bgWhite?: boolean;
  bgTransperant?: boolean;
  hasStartSearchIcon?: boolean;
  hideTextPreview?: boolean;
  menuStyle?: {
    maxHeight: number;
    width: number;
  };
  maxHeightForOptionsList?: number;
  hideArrow?: boolean;
  onLoadMore?: () => void;
  hasMoreItems?: boolean;
  clearIcon?: null;
  height?: string;
  acceptsNumbers?: boolean;
  enableGroupBy?: boolean;
};

type OptionType = {
  key: string;
  value: string;
  groupBy?: string;
};

const CustomAutoComplete = (props: CustomAutoCompleteProps) => {
  const {
    options,
    maxHeightForOptionsList,
    value,
    loading,
    loadingText,
    placeholder,
    bgWhite,
    bgTransperant,
    isDisabled,
    onDebounceCall,
    onClick,
    onInputEmpty,
    hasStartSearchIcon,
    hideTextPreview,
    hideArrow,
    clearIcon,
    height,
    placeHolderColor,
    disableOptionsOnSelect = false,
    acceptsNumbers,
    onLoadMore,
    hasMoreItems,
    enableGroupBy = false,
  } = props;

  const [selectedOptionState, setSelectedOptionState] = useState("");
  const [selectedOptionDebounce] = useDebounce(selectedOptionState, 1000);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const _options: Options = [...options];
  const optionsList = _options.filter((opt) => !opt.hide).map((opt) => opt);

  const [defaultOption, setDefaultOption] = useState(value ? _options.find((opt) => opt.key === value) || null : null);

  useEffect(() => {
    setDefaultOption(value ? _options.find((opt) => opt.key === value) || null : null);
    if (disableOptionsOnSelect) {
      setIsOptionsDisabled(!!value);
    }
  }, [value, _options, disableOptionsOnSelect]);

  const handleChange = (event: SyntheticEvent<Element, Event>, value: OptionType | null): void => {
    event;
    setDefaultOption(value);
    const selectedText = value?.key;
    const selectedOption = options.find((opt) => opt.key === selectedText);
    const selectedOptionKey = selectedOption?.key || "";
    props.onChange(selectedOptionKey);
    if (disableOptionsOnSelect) {
      setIsOptionsDisabled(!!selectedOptionKey);
    }
  };

  const handleTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    let processedValue = inputValue.replace(/^\s+/, "");
    if (acceptsNumbers === false) {
      processedValue = processedValue.replace(/[0-9]/g, "");
    }
    setSelectedOptionState(processedValue);
    if (processedValue === "") {
      onInputEmpty && onInputEmpty();
      if (disableOptionsOnSelect) {
        setIsOptionsDisabled(false);
      }
    }
  };

  useEffect(() => {
    if (selectedOptionDebounce && (selectedOptionDebounce.length >= 2 || selectedOptionDebounce === "")) {
      onDebounceCall && onDebounceCall(selectedOptionDebounce);
    }
  }, [selectedOptionDebounce]);

  const handleScroll = (event: UIEvent<HTMLUListElement>) => {
    const listboxNode = event.currentTarget;
    const scrollTop = listboxNode.scrollTop;
    const scrollHeight = listboxNode.scrollHeight;
    const clientHeight = listboxNode.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 20 && hasMoreItems && !loading) {
      onLoadMore && onLoadMore();
    }
  };

  const inputStyles = {
    border: "1px",
    outline: "none",
    borderRadius: "4px",
    boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.16)",
    "& .MuiOutlinedInput-root": {
      background: props.isDisabled ? alpha("#C9CBCC", 0.3) : bgWhite ? "white" : bgTransperant ? "#274059" : "inherit",
      borderRadius: "4px",
      height: height ? height : "40px",
      fontSize: "14px",
      border: props.hasError ? "1px solid red" : `1px solid ${alpha(theme.palette.grey[500], 0.3)}`,
      borderWidth: "0.5px",
      "& fieldset": { border: "1px" },
      "&:hover fieldset": { border: "1px" },
      "&.Mui-focused fieldset": { border: "1px" },
      "& input::placeholder": { fontSize: "14px" },
    },
    "& .MuiAutocomplete-inputRoot": {
      border: "1px solid #F1F1F1 !important",
      borderRadius: "4px !important",
      "&:hover": {
        borderWidth: "0.5px",
        border: "1px solid #F1F1F1 !important",
      },
    },
  };

  const sxStyles = props.hasError
    ? { ...inputStyles, ...errorBorder }
    : { ...inputStyles, border: "1px solid #F1F1F1" };

  return (
    <>
      <Autocomplete
        {...(enableGroupBy && { groupBy: (option: OptionType) => option.groupBy || "" })}
        clearIcon={clearIcon}
        value={defaultOption}
        getOptionLabel={(option: OptionType) => option.value}
        sx={{
          ...sxStyles["& .MuiOutlinedInput-root"],
          "& .MuiOutlinedInput-root": {
            padding: hideArrow ? "6px 10px !important" : "inherit",
            fontSize: "14px",
            color: placeHolderColor ? "white" : "inherit",
          },
        }}
        open={isOpen}
        onOpen={() => {
          if ((!isOptionsDisabled || !disableOptionsOnSelect) && !isDisabled) {
            setIsOpen(true);
            onClick && onClick();
          }
        }}
        onClose={() => setIsOpen(false)}
        className={hideArrow ? "custom-autocomplete" : ""}
        onChange={(event, value: OptionType | null) => handleChange(event, value)}
        size="small"
        disablePortal
        disabled={isDisabled}
        options={loading || (isOptionsDisabled && disableOptionsOnSelect) ? [] : optionsList}
        ListboxProps={{
          style: { maxHeight: maxHeightForOptionsList ? maxHeightForOptionsList : "200px" },
          onScroll: handleScroll,
        }}
        renderOption={(props, option) => {
          const selectedOption = _options.find((opt) => opt.value === option.value);
          return (
            <li {...props} key={option.key}>
              {selectedOption?.child || option.value}
            </li>
          );
        }}
        loading={loading}
        loadingText={loadingText || "Loading..."}
        PaperComponent={(props) => <Paper {...props} />}
        renderInput={(params) => (
          <TextField
            style={{ borderRadius: "10px", paddingBottom: "7px" }}
            {...params}
            inputProps={{
              ...params.inputProps,
              value: hideTextPreview ? "" : params.inputProps.value,
              onKeyDown: (event) => {
                if (acceptsNumbers === false && /[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              },
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: hasStartSearchIcon && (
                <SearchIcon sx={{ opacity: 0.5, color: placeHolderColor ? "white" : "inherit" }} />
              ),
              endAdornment: (
                <Grid maxWidth={"100%"} container width={"fit-content"}>
                  {loading && <CircularProgress size={"20px"} color="inherit" />}
                  {params.InputProps.endAdornment}
                </Grid>
              ),
            }}
            onChange={handleTextChange}
            placeholder={placeholder}
            sx={{
              "& .MuiInputBase-input::placeholder": {
                fontSize: "14px",
                color: placeHolderColor ? "white" : "inherit",
              },
            }}
          />
        )}
      />

      <Typography sx={errorStyle} variant="caption">
        {props.hasError ? props.errorMessage : ""}
      </Typography>
    </>
  );
};

export default CustomAutoComplete;

const errorBorder = {
  "&.MuiAutocomplete-root": {
    border: "1px solid red",
    borderRadius: "4px",
  },
};
