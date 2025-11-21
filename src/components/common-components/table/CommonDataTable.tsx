import React from "react";
import { DataGrid, type GridColDef, type GridRowsProp } from "@mui/x-data-grid";
import { Box, styled } from "@mui/material";

export interface CommonDataTableProps {
  columns: GridColDef[];
  rows: GridRowsProp;
  pageSize?: number;
  autoHeight?: boolean;
  checkboxSelection?: boolean;
  getRowId?: (row: any) => string | number;
  onRowClick?: (params: any) => void;
  height?: number | string;
  headerBg?: string;
  headerTextColor?: string;
}

const PREFIX = "CommonDataTable";
const StyledDataGrid = styled(DataGrid, {
  name: PREFIX,
  slot: "Root",
})(({ theme }) => ({
  border: "1px solid #E9E9E9",
  borderRadius: 8,
  fontFamily: "'Figtree', sans-serif",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.neutral?.[1] ?? "#F5F7FA",
    color: theme.palette.neutral?.[60] ?? "#556",
    fontSize: 14,
    fontWeight: 600,
    borderBottom: "1px solid #E9E9E9",
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: theme.palette.neutral?.[1] ?? "#F5F7FA",
    color: theme.palette.neutral?.[60] ?? "#556",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontSize: 14,
    fontWeight: 600,
    textTransform: "none",
  },
  "& .MuiDataGrid-cell": {
    backgroundColor: "#fff",
    borderBottom: "1px solid #E9E9E9",
    color: theme.palette.neutral?.[80] ?? "#333",
    fontSize: 14,
    fontWeight: 400,
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },

  "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
    outline: "none",
  },
}));

const CommonDataTable: React.FC<CommonDataTableProps> = ({
  columns,
  rows,
  pageSize = 10,
  autoHeight = false,
  checkboxSelection = false,
  getRowId,
  onRowClick,
  height = 500,
  headerBg,
  headerTextColor,
}) => {
  return (
    <Box sx={{ width: "100%", bgcolor: "transparent" }}>
      <StyledDataGrid
        columns={columns}
        rows={rows}
        autoHeight={autoHeight}
        pageSizeOptions={[5, 10, 25, 50]}
        initialState={{
          pagination: { paginationModel: { pageSize } },
        }}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick
        getRowId={getRowId}
        onRowClick={onRowClick}

        sx={{
          height,

          ...(headerBg
            ? {
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: (theme: any) =>
                    (theme.palette?.neutral?.[parseInt(headerBg, 5)] 
                      ? theme.palette.neutral[5]
                      : undefined) ?? headerBg,
                },
                "& .MuiDataGrid-columnHeader": {
                  backgroundColor: headerBg,
                },
              }
            : {}),
          ...(headerTextColor
            ? {
                "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeader": {
                  color: headerTextColor,
                },
              }
            : {}),
        }}
      />
    </Box>
  );
};

export default CommonDataTable;
