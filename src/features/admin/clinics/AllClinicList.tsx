import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { dataGridStyles } from "../../../styles/dataGridStyles";
import { allClinicColumns } from "./columns/allClinic.column";
import { allClinicRows } from "../settings/DummyData/dummy";

const AllClinicList: React.FC = () => {

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={allClinicRows}
          columns={allClinicColumns}
          pageSizeOptions={[5, 10, 25]}
          sx={dataGridStyles}
        />
      </Box>
    </>
  );
};

export default AllClinicList;


