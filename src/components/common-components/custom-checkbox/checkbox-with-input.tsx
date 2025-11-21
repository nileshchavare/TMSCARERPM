import React from "react";

import { Checkbox, FormControlLabel, FormGroup, TextField, alpha } from "@mui/material";
import { Grid } from "@mui/system";

import CheckboxCheckedLogo from "../../assets/image_svg/icons/_Checkbox base.svg";
import CheckboxLogo from "../../assets/image_svg/icons/check_box_outline_blank_24dp_9B9D9F_FILL1_wght400_GRAD0_opsz24.svg";

export interface CheckboxData {
  name: string;
  label: string;
  checked?: boolean;
}

interface CheckboxWithTextFieldsProps {
  data: CheckboxData[];
  size?: number;
  isDisabled?: boolean;
  onChange: (data: CheckboxData[]) => void;
}

export const CheckboxWithTextFields: React.FC<CheckboxWithTextFieldsProps> = ({
  data,
  size,
  isDisabled = false,
  onChange,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const { checked } = event.target;
    const updated = data.map((item, i) => (i === idx ? { ...item, checked } : item));
    onChange(updated);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, idx: number) => {
    const { value } = event.target;
    const updated = data.map((item, i) => (i === idx ? { ...item, label: value } : item));
    onChange(updated);
  };

  return (
    <FormGroup sx={{ width: "100%" }}>
      <Grid container width={"100%"} spacing={1}>
        {data.map((item, idx) => (
          <Grid key={item.name + idx} size={size} display={"flex"} alignItems="center">
            <Grid container>
              <FormControlLabel
                control={
                  <Checkbox
                    checkedIcon={<img src={CheckboxCheckedLogo} />}
                    checked={!!item.checked}
                    disabled={isDisabled}
                    icon={<img src={CheckboxLogo} />}
                    onChange={(e) => handleCheckboxChange(e, idx)}
                    name={item.name}
                    sx={{
                      transform: "scale(1)",
                    }}
                  />
                }
                label={""}
                sx={{ marginRight: 0 }}
              />
            </Grid>
            <Grid container width={"100%"} flex={1}>
              <TextField
                fullWidth
                disabled={isDisabled}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    height: "30px",
                    width: "100%",
                    backgroundColor: isDisabled ? alpha("#C9CBCC", 0.3) : "transparent",
                  },
                }}
                id={`outlined-basic-${item.name}-${idx}`}
                variant="outlined"
                value={item.label}
                placeholder="Enter Details"
                onChange={(e) => handleTextChange(e, idx)}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </FormGroup>
  );
};
