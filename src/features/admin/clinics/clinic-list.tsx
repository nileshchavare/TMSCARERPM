import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Box } from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { allClinicRows } from "../settings/DummyData/dummy";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CommonStatusChip from "../../../components/common-components/common-status-chip/CommonStatusChip";
import {
  RowActionMenu,
  type RowActionOption,
} from "../../../components/common-components/table/RowActionDrawer";
import type { ClinicRow } from "./constant";
import { dataGridStyles } from "../../../styles/dataGridStyles";

const AllClinicList: React.FC = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={allClinicRows}
          columns={clinicsColumns}
          pageSizeOptions={[10]}
          sx={dataGridStyles}
          disableRowSelectionOnClick={true}
        />
      </Box>
    </>
  );
};

export default AllClinicList;

export const clinicsColumns: GridColDef<(typeof allClinicRows)[number]>[] = [
  {
    field: "srNo",
    headerName: "Sr. No",
    width: 80,
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      return params.api.getRowIndexRelativeToVisibleRows(params.id) + 1;
    },
  },
  {
    field: "clinicName",
    headerName: "Clinic Name",
    minWidth: 350,
  },
  {
    field: "speciality",
    headerName: "Speciality",
    width: 300,
  },
  {
    field: "email",
    headerName: "Email ID",
    width: 300,
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
  },
  {
    field: "contactNumber",
    headerName: "Contact No",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => <CommonStatusChip value={params.value} />,
    width: 150,
  },

  {
    field: "actions",
    headerName: "Action",
    width: 80,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <RowActionMenu row={params.row} options={actionOptions} />
    ),
  },
];

const onEdit = (row: ClinicRow) => console.log("Edit:", row);

const onArchive = (row: ClinicRow) => console.log("Archive:", row);

export const actionOptions: RowActionOption<ClinicRow>[] = [
  {
    key: "edit",
    label: "Edit",
    icon: <CreateOutlinedIcon fontSize="small" />,
    onClick: onEdit,
  },
  {
    key: "archive",
    label: "Archive",
    icon: <Inventory2OutlinedIcon fontSize="small" />,
    onClick: onArchive,
  },
];
