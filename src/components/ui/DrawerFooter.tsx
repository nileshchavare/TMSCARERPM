
import { Box, Button } from "@mui/material";

type DrawerFooterProps = {
  onCancel?: () => void;
  onSave?: () => void;
  loading?: boolean;
};

export default function DrawerFooterButtons({
  onCancel,
  onSave,
  loading = false,
}: DrawerFooterProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        borderTop: "1px solid #E7E7E7",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "flex-end",
        gap: '12px',
        p: '12px 24px',
      }}
    >
      <Button variant="outlined" onClick={onCancel} disabled={loading}>
        Cancel
      </Button>

      <Button variant="contained" onClick={onSave} disabled={loading}>
        Save
      </Button>
    </Box>
  );
}
