import * as React from "react";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Grid } from "@mui/system";

import { theme } from "../../../utils/theme";

type CustomRadioButtonProps = {
  optionsArray: string[];
  selectedvalue: string;
  fontSize?: string;
  onChange: (opt: string) => void;
  disableUnselected?: boolean;
  disabled?: boolean;
};

const CustomRadioButton = (props: CustomRadioButtonProps) => {
  const {
    optionsArray,
    selectedvalue,
    onChange,
    fontSize = "14px",
    disableUnselected = false,
    disabled = false,
  } = props;
  const [value, setValue] = React.useState<string>(selectedvalue);
  const [latestOtionsArray, setLatestOptionsArray] = React.useState<string[]>(optionsArray);

  React.useEffect(() => {
    if (optionsArray && optionsArray.length > 0) {
      setLatestOptionsArray(optionsArray);
    }
  }, [optionsArray]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    onChange((event.target as HTMLInputElement).value);
  };

  React.useEffect(() => {
    setValue(selectedvalue);
  }, [selectedvalue]);

  return (
    <Grid>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {latestOtionsArray?.map((option, i) => (
            <FormControlLabel
              value={option}
              key={i}
              control={
                <Radio
                  disabled={disabled || (disableUnselected ? option !== value : false)}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 16,
                      color: value === option ? theme.palette.primary.main : "inherit",
                    },
                  }}
                />
              }
              label={option}
              sx={{ ".MuiFormControlLabel-label": { fontSize } }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default CustomRadioButton;
