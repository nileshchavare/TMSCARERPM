// src/features/users/user.columns.ts

import type { GridColDef } from "@mui/x-data-grid";
import type { UserRow } from "../types/type";
import { RowActionMenu, type RowActionOption } from "../../../../components/common-components/table/RowActionDrawer";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

export const userRowActions: RowActionOption<UserRow>[] = [
    {
        key: "edit",
        label: "Edit",
        icon: <CreateOutlinedIcon fontSize="small" />,
        onClick: (row) => console.log("Edit:", row),
    },
    {
        key: "archive",
        label: "Archive",
        icon: <Inventory2OutlinedIcon fontSize="small" />,
        onClick: (row) => console.log("Archive:", row),
    },
];

export const userColumns: GridColDef<UserRow>[] = [
    {
        field: "userId",
        headerName: "User ID",
        width: 80,
        sortable: false,
        filterable: false,
        renderCell: (params) =>
            params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
    },
    { field: "username", headerName: "User Name", flex: 1, minWidth: 120 },
    { field: "roleType", headerName: "Role Type", width: 160 },
    { field: "role", headerName: "Role", width: 160 },
    { field: "email", headerName: "Email", width: 160 },
    { field: "contactNumber", headerName: "Contact No", width: 160 },
    { field: "status", headerName: "Status", width: 160 },
    {
        field: "action",
        headerName: "Action",
        width: 160,
        renderCell: (params) => <RowActionMenu row={params.row} options={userRowActions} />,
    },
];
