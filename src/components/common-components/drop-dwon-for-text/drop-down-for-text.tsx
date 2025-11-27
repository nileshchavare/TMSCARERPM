import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
  type SxProps,
  Typography,
} from "@mui/material";
import type { Theme } from "@emotion/react";

type Option = { key: string; value: string };

type DropDownForTextProps = {
  options: Option[];
  value?: string;
  onChange: (event: SelectChangeEvent) => void;
  width?: string;
  disableField?: boolean;
  placeholder?: string;
  formSx?: SxProps<Theme>;
  selectSx?: SxProps<Theme>;
};

export default function DropDownForText({
  options,
  value: valueProp,
  onChange,
  width,
  disableField,
  placeholder='Select Options',
    formSx = {},
  selectSx = {},
}: DropDownForTextProps) {
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    if (valueProp !== undefined) {
      setValue(valueProp);
    }
  }, [valueProp]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    onChange(event);
  };

  return (
    <FormControl
      variant="outlined"
      sx={{
        minWidth: width || "150px",
          ...formSx, 
      }}
    >
      <Select
        disabled={disableField}
        value={valueProp !== undefined ? valueProp : value}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) =>
          selected && selected !== "" ? (
            <Typography variant="bodySmall">
              {options.find((o) => o.key === selected)?.value}
            </Typography>
          ) : (
            <Typography variant="bodySmall" color="neutral.40">
              {placeholder}
            </Typography>
          )
        }
        sx={{
          border: "1px solid ",
          borderColor: "neutral.5",
          borderRadius: "4px",
          "& .MuiSelect-select": {
            padding: "9px 12px",
            display: "flex",
            alignItems: "center",
          },

          "& fieldset": {
            display: "none",
          },

          fontSize: "14px",
          color: "neutral.80",
          ...selectSx,
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.key} value={option.key}>
            <Typography variant="bodySmall">{option.value}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
