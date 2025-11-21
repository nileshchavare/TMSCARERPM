import React, { useEffect, useState } from "react";

import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Grid,type SxProps } from "@mui/system";

import { StatusColorMap } from "../../../constants/status";
import { theme } from "../../../utils/theme";

// import { toCamelCase } from "@/utils/toCamelCase";

import CheckboxCheckedLogo from "../../assets/image_svg/icons/_Checkbox base.svg";
import CheckboxLogo from "../../assets/image_svg/icons/check_box_outline_blank_24dp_9B9D9F_FILL1_wght400_GRAD0_opsz24.svg";

export type CheckedArray = {
  checked: boolean;
  color?: string;
  key: string;
  borderColor?: string;
  label?: string;
};

type CustomCheckBoxType = {
  oriantation: "horizontal" | "vertical";
  options: CheckedArray[];
  onChange: (updatedArray: CheckedArray[]) => void;
  sx?: SxProps;
  enableSelectAll?: boolean;
  width?: string;
  size?: number;
  isDisabled?: boolean;
  preselectAll?: boolean;
  isOptionDisabled?: (option: CheckedArray) => boolean;
  onViewLabelColor?: boolean;
};

const CustomCheckBox = (props: CustomCheckBoxType) => {
  const {
    options,
    onChange,
    sx,
    oriantation = "vertical",
    width,
    size,
    enableSelectAll,
    isDisabled,
    preselectAll,
    isOptionDisabled,
    onViewLabelColor,
  } = props;
  const [updatedArray, setUpdatedArray] = useState(() => {
    if (preselectAll) {
      return options.map((option) => ({ ...option, checked: true }));
    }
    return options;
  });

  useEffect(() => {
    if (preselectAll) {
      setUpdatedArray(options.map((option) => ({ ...option, checked: true })));
    } else {
      setUpdatedArray(options);
    }
  }, [options, preselectAll]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, value?: CheckedArray) => {
    if (!value || isDisabled || (isOptionDisabled && isOptionDisabled(value))) {
      return;
    }

    let updatedArr;
    if (value.key === "ALL") {
      // Handle "All" checkbox
      updatedArr = updatedArray.map((val) => ({
        ...val,
        checked: event.target.checked,
      }));
    } else {
      // Handle individual checkboxes
      updatedArr = updatedArray.map((val) => {
        if (value.key === val.key) {
          return { ...val, checked: event.target.checked };
        } else {
          return { ...val };
        }
      });

      // Update "All" checkbox state based on other checkboxes
      if (enableSelectAll) {
        const allChecked = updatedArr.every((val) => val.checked);
        const allOption = updatedArr.find((val) => val.key === "ALL");
        if (allOption) {
          allOption.checked = allChecked;
        }
      }
    }

    setUpdatedArray(updatedArr);
    onChange(updatedArr);
  };

  // Add "All" option if enableSelectAll is true
  const displayOptions = enableSelectAll
    ? [{ key: "ALL", checked: updatedArray.every((val) => val.checked), label: "All" }, ...updatedArray]
    : updatedArray;

  return (
    <Grid width={"100%"} container flexDirection={oriantation === "vertical" ? "column" : "row"}>
      {displayOptions.map((val) => (
        <Grid
          container
          justifyContent={"flex-start"}
          flexDirection={oriantation === "vertical" ? "column" : "row"}
          columnGap={"4px"}
          width={width ? width : oriantation === "vertical" ? "100%" : width}
          size={size}
          key={val.key}
        >
          <FormControlLabel
            control={
              <CheckBox
                checked={val.checked}
                val={val}
                handleChange={function (e, val): void {
                  handleChange(e, val);
                }}
                disabled={isDisabled || (isOptionDisabled && isOptionDisabled(val))}
              />
            }
            label={
              <Grid container alignItems={"center"} columnGap={1}>
                {StatusColorMap[val.key] && (
                  <Grid
                    width={"10px"}
                    height={"10px"}
                    borderRadius={"50%"}
                    bgcolor={StatusColorMap[val.key] || theme.palette.common.white}
                    border={`1px solid ${val.borderColor || "transparent"}`}
                  ></Grid>
                )}
                <Typography
                  color={onViewLabelColor ? "black" : "inherit"}
                  sx={{ ...sx, fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif" }}
                  variant="bodySmall"
                >
                  {val.label || val.key || "Undefined"}
                </Typography>
              </Grid>
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomCheckBox;

type CheckBoxType = {
  checked: boolean;
  val: CheckedArray;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, val?: CheckedArray) => void;
  disabled?: boolean;
};

const CheckBox = (props: CheckBoxType) => {
  const { checked, handleChange, val, disabled } = props;
  return (
    <Checkbox
      checkedIcon={<img src={CheckboxCheckedLogo} />}
      checked={checked}
      icon={<img src={CheckboxLogo} />}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, val)}
      disabled={disabled}
    />
  );
};
