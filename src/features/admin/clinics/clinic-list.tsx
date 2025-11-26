import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Box, Typography } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
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
import { useNavigate } from "react-router-dom";

const AllClinicList: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (params: GridRenderCellParams) => {
    navigate(`/app/clinic-details/${params.row.id}`);
  }

  const clinicsColumns: GridColDef<(typeof allClinicRows)[number]>[] = [
    {
      field: "srNo",
      headerName: "Sr. No",
      minWidth: 80,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return params.api.getRowIndexRelativeToVisibleRows(params.id) + 1;
      },
    },
    {
      field: "clinicName",
      headerName: "Clinic Name",
      minWidth: 220,
      renderCell: (params) => <Typography variant="body14PX500FW" sx={{ cursor: "pointer" }} color="primary.70" onClick={() => handleNavigate(params)} >{params.value}</Typography>,
    },
    {
      field: "speciality",
      headerName: "Speciality",
      minWidth: 220,
    },
    {
      field: "email",
      headerName: "Email ID",
      minWidth: 220,
    },
    {
      field: "address",
      headerName: "Address",
      minWidth: 300,
      flex: 1,
    },
    {
      field: "contactNumber",
      headerName: "Contact No",
      minWidth: 200,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => <CommonStatusChip value={params.value} />,
      minWidth: 150,
    },

    {
      field: "actions",
      headerName: "Action",
      minWidth: 80,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <RowActionMenu row={params.row} options={actionOptions} />
      ),
    },
  ];

  const onEdit = (row: ClinicRow) => console.log("Edit:", row);

  const onArchive = (row: ClinicRow) => console.log("Archive:", row);

  const actionOptions: RowActionOption<ClinicRow>[] = [
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
