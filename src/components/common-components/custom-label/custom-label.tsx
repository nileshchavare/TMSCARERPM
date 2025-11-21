import React from "react";

import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

import { customLabelStyles } from "./widgets/custom-label-styles";

interface CustomFormLabelProps {
  label: string | React.ReactNode;
  isRequired?: boolean;
  variant?: "bodySmall" | "bodyMedium" | 'body5Medium' | 'body14PX500FW' | 'body14PX400FW';
  color?: string;
}

function CustomLabel(props: CustomFormLabelProps) {
  const { label, isRequired, variant, color } = props;

  return (
    <Box mb={1}>
      <Typography
        sx={{ fontWeight: 500, letterSpacing: "inherit" }}
        variant={variant || "bodyExtraSmall"}
        color={color}
      >
        {label}
        {isRequired && <span style={customLabelStyles.required}>*</span>}
      </Typography>
    </Box>
  );
}

CustomLabel.propTypes = {
  label: PropTypes.string,
};

export default CustomLabel;
