import { Chip, type ChipProps } from "@mui/material";

interface CommonNumberChipProps {
  label: number;
  size?: ChipProps["size"];
}

const CommonNumberChip = ({ label, size = "small" }: CommonNumberChipProps) => {

  const getColors = (theme: any) => {
    if (label >= 0 && label <= 10) {
      return {
        bg: theme.palette.positive[5],
        text: theme.palette.positive[60],
      };
    }
    if (label > 10 && label <= 30) {
      return {
        bg: theme.palette.warningColor[5],
        text: theme.palette.warningColor[60],
      };
    }
    if (31 <=label) {
      return {
        bg: theme.palette.negative[5],
        text: theme.palette.negative[60],
      };
    }

    return {
      bg: "gray",
      text: "white",
    };
  };

  return (
    <Chip
      label={label}
      size={size}
      sx={(theme) => {
        const { bg, text } = getColors(theme);

        return {
          fontSize: "12px",
          fontWeight: 500,
          backgroundColor: bg,
          color: text,
        };
      }}
    />
  );
};

export default CommonNumberChip;
