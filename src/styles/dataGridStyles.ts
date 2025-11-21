import { type SxProps, type Theme } from "@mui/material";

export const dataGridStyles: SxProps<Theme> = (theme) => ({
  border: "1px solid #E9E9E9",
  borderRadius: 2,
  fontFamily: "'Figtree', sans-serif",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.neutral?.[1] ?? "#F5F7FA",
    color: theme.palette.neutral?.[60] ?? "#556",
    fontSize: 14,
    fontWeight: 600,
  },

  "& .MuiDataGrid-columnHeader": {
    backgroundColor: theme.palette.neutral?.[1] ?? "#F5F7FA",
    color: theme.palette.neutral?.[60] ?? "#556",
  },

  "& .MuiDataGrid-columnHeaderTitle": {
    fontSize: 14,
    fontWeight: 600,
  },

  "& .MuiDataGrid-cell": {
    backgroundColor: "#FFF",
    borderBottom: "1px solid #E9E9E9",
    color: theme.palette.neutral?.[80] ?? "#333",
    fontSize: 14,
    fontWeight: 400,
  },
});
