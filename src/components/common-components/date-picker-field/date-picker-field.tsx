import React, { useEffect, useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import { Grid, alpha } from "@mui/system";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { type DateValidationError, type PickerChangeHandlerContext } from "@mui/x-date-pickers/models";

import { format, parse } from "date-fns";
import { enUS } from "date-fns/locale";

import { theme } from "../../../utils/theme";
import { customInputStyles, errorStyle } from "../custom-input/widgets/custom-input-styles";

export interface DatePickerProps {
  value?: string;
  onDateChange: (selectedDate: string) => void;
  bgWhite: boolean;
  hasError?: boolean;
  errorMessage?: string;
  disableFuture?: boolean;
  disablePast?: boolean;
  disable?: boolean;
  minDate?: string;
  maxDate?: string;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  value,
  onDateChange,
  bgWhite,
  hasError,
  errorMessage,
  disableFuture,
  disablePast,
  disable,
  minDate,
  maxDate,
}) => {
  const [inputValue, setInputValue] = useState<Date | null>(value ? new Date(value) : null);

  useEffect(() => {
    if (value) {
      const parsedDate = parse(value, "MM/dd/yyyy", new Date());
      setInputValue(parsedDate);
    } else {
      setInputValue(null);
    }
  }, [value]);

  const handleChange = (value: Date | null, _context: PickerChangeHandlerContext<DateValidationError>) => {
    if (value) {
      const formattedDate = format(value, "MM/dd/yyyy");
      setInputValue(value);
      onDateChange(formattedDate);
    } else {
      setInputValue(null);
      onDateChange("");
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent picker popup
    setInputValue(null);
    onDateChange("");
  };

  const backgroundWhiteOrInherit = bgWhite ? "white" : "inherit";

  return (
    <Grid container>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
        <DesktopDatePicker
          disabled={disable}
          disableFuture={disableFuture}
          disablePast={disablePast}
          value={inputValue}
          closeOnSelect={true}
          minDate={minDate ? new Date(minDate) : undefined}
          maxDate={maxDate ? new Date(maxDate) : undefined}
          onChange={handleChange}
          format="MM/dd/yyyy"
          slotProps={{
            textField: (params: any) => ({
              ...params,
              inputProps: { ...params.inputProps, readOnly: true },
              InputProps: {
                ...params.InputProps,
                endAdornment: (
                  <>
                    {inputValue && (
                      <InputAdornment position="end">
                        <IconButton size="small" onClick={handleClear} disabled={disable}>
                          <ClearIcon fontSize="small" />
                        </IconButton>
                      </InputAdornment>
                    )}
                    {params.InputProps?.endAdornment}
                  </>
                ),
              },
            }),
          }}
          sx={{
            width: "100%",
            height: '32px',
            ...(hasError && { borderRadius: "16px" }),

            "&.MuiFormControl-root, &.MuiTextField-root": {
              height: "32px !important",
              minHeight: "32px !important",
              maxHeight: "32px !important",
            },
            "& .MuiPickersSectionList-root": {
              padding: "8px 0 !important",
            },

            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              height: "32px !important",
              minHeight: "32px !important",
              width: "100%",
              border: hasError ? customInputStyles.textFieldError : `1px solid ${alpha(theme.palette.grey[500], 0.3)}`,
              background: disable ? alpha("#C9CBCC", 0.3) : backgroundWhiteOrInherit,
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            },
            "& .MuiInputBase-input": {
              fontSize: "14px",
              outline: "none",
              height: "32px !important",
            },
          }}
        />
      </LocalizationProvider>
      <Typography textAlign={"start"} sx={errorStyle} variant="caption">
        {hasError ? errorMessage : ""}
      </Typography>
    </Grid>
  );
};

export default CustomDatePicker;
