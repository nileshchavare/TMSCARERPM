import React from "react";
import { Chip } from "@mui/material";
import { theme } from "../../../utils/theme";

interface StatusChipProps {
  value: string;
  variant?: "filled" | "outlined";
  sx?: object;
}

const getStatusStyles = (label: string) => {
  switch (label) {
    case "DONE":
      return {
        bg: theme.palette.positive?.[5],
        text: theme.palette.positive?.[60],
      };
    case "MALE":
      return {
        bg: "#F4F3FF",
        text: "#5925DC",
      };
    case "ACTIVE":
      return {
        bg: theme.palette.positive?.[5],
        text: theme.palette.positive?.[60],
      };
    case "INACTIVE":
      return {
        bg: theme.palette.negative?.[1],
        text: theme.palette.negative?.[60],
      };
    case "PENDING":
      return { bg: "#FFC107", text: "#000" };
    case "APPROVED":
      return { bg: "#2E7D32", text: "#fff" };
    case "REJECTED":
      return { bg: "#D32F2F", text: "#fff" };
    case "COMPLETED":
      return {
        bg: theme.palette.positive?.[5],
        text: theme.palette.positive?.[60],
      };
    case "TO DO":
      return {
        bg: theme.palette.informative?.[5],
        text: theme.palette.informative?.[60],
      };
    case "OVER DUE":
      return {
        bg: theme.palette.warningColor?.[5],
        text: theme.palette.warningColor?.[60],
      };
    case "HIGH":
      return {
        bg: theme.palette.negative?.[5],
        text: theme.palette.negative?.[60],
      };
    case "MEDIUM":
      return {
        bg: theme.palette.warningColor?.[5],
        text: theme.palette.warningColor?.[60],
      };
    case "ROUTING":
      return {
        bg: theme.palette.positive?.[5],
        text: theme.palette.positive?.[60],
      };
    case "LOW":
      return {
        bg: theme.palette.warningColor?.[5],
        text: theme.palette.warningColor?.[60],
      };
    default:
      return { bg: "#E0E0E0", text: "#000" };
  }
};

const CommonStatusChip: React.FC<StatusChipProps> = ({
  value,
  variant = "filled",
  sx = {},
}) => {
  if (!value) return null;

  const label = value.toString().toUpperCase().trim();
  const { bg, text } = getStatusStyles(label);

  return (
    <Chip
      label={label}
      size="small"
      variant={variant}
      sx={{
        backgroundColor: variant === "filled" ? bg : "transparent",
        border: variant === "outlined" ? `1px solid ${bg}` : "none",
        color: variant === "filled" ? text : bg,
        fontWeight: 500,
        letterSpacing: "0.3px",
        fontSize: "12px",
        ...sx,
      }}
    />
  );
};

export default CommonStatusChip;
