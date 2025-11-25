import React, { useEffect, useState } from "react";
import type { ChangeEvent, FocusEvent } from "react";

// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { errorStyle, customInputStyles } from "./widgets/customInputStyles";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ClearIcon from "@mui/icons-material/Clear";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, InputBase, Typography, alpha } from "@mui/material";
import { Grid } from "@mui/system";
import { useDebounce } from "use-debounce";
import { customInputStyles, errorStyle } from "./widgets/custom-input-styles";
import { theme } from "../../../utils/theme";

interface CustomInputProps {
  placeholder: string;
  name: string;
  value: string | number;
  isNumeric?: boolean;
  isDecimal?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  isPassword?: boolean;

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

  onDebounceCall?: (selectedValue: string | "") => void;
  onInputEmpty?: () => void;
  disableField?: boolean;
  bgWhite?: boolean;
  maxLength?: number;
  multiline?: boolean;
  rows?: number;
  hasStartSearchIcon?: boolean;
  hasStartMailIcon?: boolean;
  startSearchIconOnRight?: boolean;
  hasCrossIcon?: boolean;
  onClickNotify?: () => void;
  hasOpenListArrow?: boolean;
  required?: boolean;
  maxValue?: number;
  maxDecimalPlaces?: number;
  paddingRight?: string;
  bgGrey?: boolean;
  isAlphabetic?: boolean;
  showEllipsis?: boolean;
  autoComplete?: string;
}

export default function CustomInput(props: CustomInputProps) {
  // const classes = customInputStyles;
  const {
    paddingRight,
    bgWhite,
    onClickNotify,
    onDebounceCall,
    onInputEmpty,
    maxLength,
    hasStartSearchIcon,
    hasStartMailIcon,
    hasCrossIcon,
    startSearchIconOnRight,
    hasOpenListArrow,
    required = false,
    showEllipsis = false,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(props.value ? props.value : "");

  const [selectedOptionState, setSelectedOptionState] = useState("");
  const [selectedOptionDebounce] = useDebounce(selectedOptionState, 1000);

  // useEffect(() => {
  //   if (
  //     selectedOptionDebounce &&
  //     (selectedOptionDebounce.length > 3 || selectedOptionDebounce === "")
  //   ) {
  //     onDebounceCall && onDebounceCall(selectedOptionDebounce);
  //   }
  // }, [selectedOptionDebounce]);

  useEffect(() => {
    if (selectedOptionDebounce) {
      if (selectedOptionDebounce.length > 3) {
        // Search immediately if more than 3 characters
        onDebounceCall && onDebounceCall(selectedOptionDebounce);
      } else if (selectedOptionDebounce.length > 0) {
        const timer = setTimeout(() => {
          onDebounceCall && onDebounceCall(selectedOptionDebounce);
        }, 2000);

        // Cleanup the timeout on unmount or when dependencies change
        return () => clearTimeout(timer);
      }
    }
  }, [selectedOptionDebounce]);

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickArrow = () => {
    onClickNotify && onClickNotify();
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const maxValue = props.maxValue || 31;

    if (props.isNumeric && maxValue) {
      const numericValue = parseInt(value, 10);
      if (numericValue <= maxValue || value === "") {
        setInputValue(value);
        props.onChange && props.onChange(e);
      }
    }
    if (props.isNumeric && !maxValue) {
      if (value === "") {
        setInputValue(value);
        props.onChange && props.onChange(e);
      }
    } else {
      if (props.isDecimal) {
        const decimalRegex = new RegExp(`^\\d*(\\.\\d{0,${props.maxDecimalPlaces || 2}})?$`);

        const numericValue = parseFloat(value);

        if ((decimalRegex.test(value) && numericValue <= maxValue) || value === "") {
          setInputValue(value);
          setSelectedOptionState(value);
          props.onChange && props.onChange(e);
        }
      } else {
        if (value === "") {
          onInputEmpty && onInputEmpty();
        }
        setInputValue(value);
        setSelectedOptionState(value);
        props.onChange && props.onChange(e);
      }
    }
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e || !e.target) return; // Add null check for event and target

    const trimmedValue = e.target.value.trim();
    setInputValue(trimmedValue); // Set trimmed value in input
    props.onChange && props.onChange({ ...e, target: { ...e.target, value: trimmedValue } }); // Notify parent component with trimmed value
  };

  return (
    <Grid container flexDirection={"column"} width={"100%"}>
      <InputBase
        fullWidth
        className="popper-area"
        name={props.name}
        type={showPassword ? "text" : props.isPassword ? "password" : "text"}
        placeholder={props.placeholder}
        value={inputValue}
        
        sx={{
          borderRadius: "4px",
          paddingRight: paddingRight ? paddingRight : "0px",
          background: props.disableField
            ? alpha("#C9CBCC", 0.3)
            : bgWhite
              ? "white"
              : // "#F5F6F8"
              "inherit",
          height: props.multiline ? "fit-content" : "40px",
          ...customInputStyles.textFieldRoot,
          ...(props.hasError && customInputStyles.textFieldError),
          ...customInputStyles.textFieldInput,
          ...(showEllipsis && {
            "& input": {
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              color: theme.palette.neutral[90],
            },
            "& input::placeholder": {
              ...theme?.typography?.body14PX400FW,
              color: "theme.palette.neutral.40",
            },
          }),
        }}
        inputProps={{
              maxLength: maxLength ?? "",
              autoComplete: props.autoComplete ?? "off",
          }}

        onChange={handleInputChange}
        onBlur={handleInputBlur}
        error={props.hasError}
        required={required}
        disabled={props.disableField}
        // inputMode={props.isNumeric ? "number" : "text"}
        inputMode={props.isNumeric ? "numeric" : props.isDecimal ? "decimal" : props.isAlphabetic ? "text" : "text"}
        // onInput={
        //   props.isNumeric
        //     ? (e: ChangeEvent<HTMLInputElement>) => {
        //         e.target.value = e.target.value.replace(/[^0-9]/g, "");
        //       }
        //     : undefined
        // }
        onInput={
          props.isNumeric
            ? (e: ChangeEvent<HTMLInputElement>) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }
            : props.isDecimal
              ? (e: ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.replace(/[^0-9.]/g, "");
              }
              : props.isAlphabetic
                ? (e: ChangeEvent<HTMLInputElement>) => {
                  e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
                }
                : undefined
        }
        classes={{
          root: `${customInputStyles.textFieldRoot}`,
          input: `${customInputStyles.textFieldInput}`,
          // focused: `${customInputStyles.textFieldActive}`,
          error: `${customInputStyles.textFieldError}`,
        }}
        multiline={props.multiline}
        rows={props.rows}
        startAdornment={
          <InputAdornment position="end">
            {hasStartSearchIcon && !startSearchIconOnRight && <SearchIcon />}
            {hasStartMailIcon && <MailOutlinedIcon sx={{ marginRight: "10px",color: "neutral.60", width:'18px' }} />}
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            {props.isPassword && (
              <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                {showPassword ? <VisibilityOutlinedIcon sx={{color: "neutral.70"}} /> : <VisibilityOffOutlinedIcon sx={{ width:'18px',color: "neutral.70"}} />}
              </IconButton>
            )}

            {hasOpenListArrow && (
              <IconButton onClick={handleClickArrow}>
                {showPassword ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </IconButton>
            )}

            {hasCrossIcon && (
              <IconButton onClick={handleClickArrow}>{showPassword ? <ClearIcon /> : <ClearIcon />}</IconButton>
            )}
            <InputAdornment position="end">
              {hasStartSearchIcon && startSearchIconOnRight && <SearchIcon sx={{ marginRight: "10px" }} />}
            </InputAdornment>
          </InputAdornment>
        }
      />
      <Typography textAlign={"start"} sx={errorStyle} variant="caption">
        {props.hasError ? props.errorMessage : ""}
      </Typography>
    </Grid>
  );
}
