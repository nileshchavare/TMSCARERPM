
import { userRows } from '../DummyData/dummy';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { dataGridStyles } from '../../../../styles/dataGridStyles';
import type { GridColDef } from "@mui/x-data-grid";
import type { UserRow } from "../types/type";
import { RowActionMenu, type RowActionOption } from "../../../../components/common-components/table/RowActionDrawer";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";



const Users = () => {
    const userRowActions: RowActionOption<UserRow>[] = [
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

    const userColumns: GridColDef<UserRow>[] = [
        {
            field: "userId",
            headerName: "User ID",
            width: 80,
            sortable: false,
            filterable: false,
            renderCell: (params) =>
                params.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
        },
        { field: "username", headerName: "User Name", width: 200 },
        { field: "roleType", headerName: "Role Type", width: 160 },
        { field: "role", headerName: "Role", width: 160 },
        { field: "email", headerName: "Email", flex: 1, minWidth: 300 },
        { field: "contactNumber", headerName: "Contact No", width: 160 },
        { field: "status", headerName: "Status", width: 160 },
        {
            field: "action",
            headerName: "Action",
            width: 160,
            renderCell: (params) => <RowActionMenu row={params.row} options={userRowActions} />,
        },
    ];
    return (
        <>
            <Box sx={{ width: "100%" }}>
                <DataGrid
                    rows={userRows}
                    columns={userColumns}
                    pageSizeOptions={[5, 10, 25]}
                    sx={dataGridStyles}
                />
            </Box>
        </>
    )
}

export default Users
