import {type ChangeEvent,type SyntheticEvent, useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Chip, CircularProgress, Typography, alpha } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/system";

import { useDebounce } from "use-debounce";

import { theme } from "../../../utils/theme";
import "./custom-autocomplete-multiselect.css";

export type Options = {
  key: string;
  value: string;
  hide?: boolean;
}[];

type CustomAutocompleteMultiselectProps = {
  options: Options;
  value: string[];

  onChange: (selectedValue: string[] | []) => void;
  placeholder: string;
  hasError?: boolean;
  limitTags: number;
  bgWhite?: boolean;
  errorMessage?: string;

  onDebounceCall?: (selectedValue: string | "") => void;
  onInputEmpty?: () => void;
  onClick?: () => void;
  hasStartSearchIcon?: boolean;
  hideTextPreview?: boolean;
  loading?: boolean;
  isDisabled?: boolean;
  hideArrow?: boolean;
  disableChipDelete?: boolean;
  disableClearable?: boolean;
  preventVerticalExpansion?: boolean;
};

const CustomAutocompleteMultiselect = (props: CustomAutocompleteMultiselectProps) => {
  const {
    options,
    value,
    limitTags,
    placeholder,
    onChange,
    onDebounceCall,
    onInputEmpty,
    bgWhite,
    hideArrow,
    hasStartSearchIcon,
    loading,
    onClick,
    isDisabled,
    disableChipDelete = false,
    disableClearable = false,
    preventVerticalExpansion = false,
  } = props;

  const [selectedOptionState, setSelectedOptionState] = useState("");
  const [selectedOptionDebounce] = useDebounce(selectedOptionState, 1000);

  const handleChange = (_event: SyntheticEvent<Element, Event>, newValue: string[]) => {
    const selectedOptions = options.filter((opt) => newValue.some((option) => opt.value === option));
    const selectedKeys = selectedOptions.map((option) => option.key) || [];
    onChange(selectedKeys);
  };

  const [preSelectedValues, setPreSelectedValues] = useState<string[]>([]);

  useEffect(() => {
    setPreSelectedValues(options.filter((opt) => value.includes(opt.key)).map((opt) => opt.value));
  }, [value, options]);

  useEffect(() => {}, [value, placeholder, limitTags, options]);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value === "") {
      onInputEmpty && onInputEmpty();
    }
    setSelectedOptionState((event && event.target.value) || "");
  };

  useEffect(() => {
    if (selectedOptionDebounce && (selectedOptionDebounce.length > 3 || selectedOptionDebounce === "")) {
      onDebounceCall && onDebounceCall(selectedOptionDebounce);
    }
  }, [selectedOptionDebounce]);

  const sxStyles = {
    background: "inherit",
    border: "none",
    borderRadius: "16px",
    maxWidth: "100%",
    "& .MuiOutlinedInput-root": {
      background: bgWhite ? "white" : "inherit",
      borderRadius: "16px",
      padding: hideArrow ? "6px 10px !important" : "inherit",
      fontSize: "14px",
      "& .MuiOutlinedInput-notchedOutline": {
        border: props.hasError ? "1px solid red" : `1px solid ${alpha(theme.palette.grey[500], 0.3)}`,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        border: props.hasError ? "1px solid red" : `1px solid ${alpha(theme.palette.grey[500], 0.3)}`,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: props.hasError ? "1px solid red" : `1px solid ${alpha(theme.palette.grey[500], 0.3)}`,
      },
    },
    "& .MuiAutocomplete-tag": {
      backgroundColor: "#E0EFFF",
      margin: "2px",
      maxWidth: "calc(100% - 4px)",
      color: "#0D58A4",
    },
  };

  const getClassName = () => {
    const classes = [];
    if (hideArrow) classes.push("custom-autocomplete");
    if (preventVerticalExpansion) classes.push("prevent-vertical-expansion");
    return classes.join(" ");
  };

  return (
    <>
      <Autocomplete
        multiple
        limitTags={props.limitTags || 3}
        className={getClassName()}
        loading={loading}
        onChange={handleChange}
        onOpen={() => onClick && onClick()}
        value={preSelectedValues}
        id="multiple-limit-tags"
        options={options.filter((option) => !option.hide).map((option) => option.value)}
        getOptionLabel={(option) => option}
        disableClearable={disableClearable}
        slotProps={{
          chip: disableChipDelete
            ? {
                onDelete: undefined,
                deleteIcon: <></>,
              }
            : undefined,
        }}
        renderTags={
          preventVerticalExpansion
            ? (tagValue, getTagProps) => {
                const numTags = tagValue.length;
                const limitTagsValue = props.limitTags || 3;

                return tagValue.map((option, index) => {
                  if (index < limitTagsValue) {
                    return (
                      <Chip
                        {...getTagProps({ index })}
                        key={option}
                        label={option}
                        size="small"
                        sx={{
                          backgroundColor: "#E0EFFF",
                          color: "#0D58A4",
                          maxWidth: "calc(100% - 4px)",
                        }}
                        deleteIcon={disableChipDelete ? <></> : undefined}
                        onDelete={disableChipDelete ? undefined : getTagProps({ index }).onDelete}
                      />
                    );
                  }
                  if (index === limitTagsValue) {
                    return (
                      <Typography
                        key="more-tags"
                        variant="body2"
                        sx={{
                          color: "#0D58A4",
                          alignSelf: "center",
                          marginLeft: "4px",
                        }}
                      >
                        +{numTags - limitTagsValue}
                      </Typography>
                    );
                  }
                  return null;
                });
              }
            : undefined
        }
        renderInput={(params) => (
          <TextField
            style={{ borderRadius: "10px" }}
            {...params}
            InputProps={{
              ...params.InputProps, // startAdornment: hasStartSearchIcon && (
              // 	<SearchIcon sx={{ opacity: 0.5 }} />
              // ),
              endAdornment: (
                <Grid maxWidth={"100%"} container width={"fit-content"}>
                  {loading && <CircularProgress size={"20px"} color="inherit" />}
                  {params.InputProps.endAdornment}
                  {hasStartSearchIcon && <SearchIcon sx={{ opacity: 0.5 }} />}
                </Grid>
              ),
            }}
            placeholder={preSelectedValues.length > 0 ? "" : placeholder}
            onChange={handleTextChange}
          />
        )}
        size="small"
        sx={sxStyles}
        disabled={isDisabled}
      />
      <Typography
        sx={{
          color: "red",
          marginLeft: props.hasError ? "5px" : "0px",
        }}
        variant="caption"
      >
        {props.hasError ? props.errorMessage : ""}
      </Typography>
    </>
  );
};

export default CustomAutocompleteMultiselect;
