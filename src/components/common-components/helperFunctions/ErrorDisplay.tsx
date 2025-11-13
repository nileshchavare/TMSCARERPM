import { Box } from "@mui/material";

const ErrorDisplay = ({ errors }: any) => {
  return (
    <>
      {Boolean(errors) && (
        <Box
          sx={{
            my: "2px",             
            color: "alert.main",   
            fontSize: "0.875rem", 
            fontWeight: 400, 
            position: "absolute"
          }}
        >
          {errors?.message?.toString()}
        </Box>
      )}
    </>
  );
};

export default ErrorDisplay;
