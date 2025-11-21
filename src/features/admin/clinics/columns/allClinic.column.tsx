import type { GridColDef } from "@mui/x-data-grid";
import type { ClinicRow } from "../constant";
import {
  RowActionMenu,
  type RowActionOption,
} from "../../../../components/common-components/table/RowActionDrawer";

import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CommonStatusChip from "../../../../components/common-components/common-status-chip/CommonStatusChip";

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

export const allClinicColumns: GridColDef[] = [
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
    minWidth: 60,
    flex: 1,
  },
  {
    field: "speciality",
    headerName: "Speciality",
    width: 160,
  },
  {
    field: "email",
    headerName: "Email ID",
    width: 220,
  },
  {
    field: "address",
    headerName: "Address",
    width: 260,
    flex: 1,
  },
  {
    field: "contactNumber",
    headerName: "Contact Number",
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => <CommonStatusChip value={params.value} />,
  },

  {
    field: "actions",
    headerName: "Action",
    width: 60,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <RowActionMenu row={params.row} options={actionOptions} />
    ),
  },
];