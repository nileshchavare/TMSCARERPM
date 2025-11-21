import React from "react";

import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Grid,type SxProps,type Theme } from "@mui/system";

import CheckboxCheckedLogo from "../../../assets/icons/_Checkbox base.svg";
import CheckboxLogo from "../../../assets/icons/check_box_outline_blank_24dp_9B9D9F_FILL1_wght400_GRAD0_opsz24.svg";

type CheckBoxType = {
  checked: boolean;
  label?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
  disabled?: boolean;
  isBold?: boolean;
};

const CustomSingleCheckBox = (props: CheckBoxType) => {
  const { checked, handleChange, label, disabled = false, isBold = false } = props;
  return (
    <Grid>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checkedIcon={<img src={CheckboxCheckedLogo} />}
              checked={checked}
              icon={<img src={CheckboxLogo} />}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
              disabled={disabled}
            />
          }
          label={label ? label : ""}
          disabled={disabled}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "14px",
              fontFamily: "Figtree, sans-serif",
              fontWeight: isBold ? 600 : 400,
              color: disabled ? "neutral.40" : "neutral.80",
            },
          }}
        />
      </FormGroup>
    </Grid>
  );
};

export default CustomSingleCheckBox;
