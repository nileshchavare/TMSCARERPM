import { Box, Button } from "@mui/material";
import ComponentSpinner from "../spinners/ComponentSpinner";
import ErrorDisplay from "../helperFunctions/ErrorDisplay";

type FooterProps = {
  handleCancel: (type: number) => void;
  btnTitle?: string;
  isCancel?: boolean;
  isLoading: boolean;
  error?: any;
  showBtn?: boolean;
  isDisabled?: boolean;
};

const FormFooter = (props: FooterProps) => {
  const { handleCancel, btnTitle, isCancel, isLoading, error, showBtn, isDisabled } = props;

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        py: 2,
        px: 2,
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row-reverse" },
        alignItems: "center",
        gap: 2,
        position: "relative",
      }}
    >
      {/* Submit Button */}
      {showBtn && (
        <Button variant="contained" type="submit" fullWidth disabled={isDisabled}>
          {isLoading ? <ComponentSpinner /> : btnTitle || "Save"}
        </Button>
      )}

      {/* Cancel Button */}
      {isCancel && (
        <Button
          variant="outlined"
          type="button"
          fullWidth
          onClick={() => handleCancel(1)}
        >
          Cancel
        </Button>
      )}

      {/* Error Message */}
      {error?.message && (
        <Box sx={{ position: "absolute", left: 16, bottom: -22 }}>
          <ErrorDisplay errors={{ message: error.message }} />
        </Box>
      )}
    </Box>
  );
};

export default FormFooter;
