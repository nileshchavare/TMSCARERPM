import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { RowActionMenu, type RowActionOption } from '../../../components/common-components/table/RowActionDrawer';
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { userRows } from '../settings/DummyData/dummy';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import { dataGridStyles } from '../../../styles/dataGridStyles';
import type { UserRow } from '../settings/types/type';
import CommonStatusChip from '../../../components/common-components/common-status-chip/CommonStatusChip';
import { Typography } from '@mui/material';
import type { GridRenderCellParams } from '@mui/x-data-grid';
const UsersList = () => {
    const columns: GridColDef<(typeof userRows)[number]>[] = [
        {
            field: 'username', headerName: 'Name', minWidth: 230, flex: 1,
            renderCell: (params) => <Typography variant="body14PX500FW" sx={{ cursor: "pointer" }} color="primary.70" onClick={() => handleNavigate(params)} >{params.value}</Typography>,
        },
        { field: 'email', headerName: 'Email Id', minWidth: 330 },
        { field: 'contactNumber', headerName: 'Contact Number', minWidth: 300 },
        { field: 'role', headerName: 'Role', sortable: false, minWidth: 200 },
        {
            field: 'status',
            headerName: 'Status',
            minWidth: 160,
            renderCell: (params) => <CommonStatusChip value={params.value} />,
        }, {
            field: 'action',
            headerName: 'Action',
            minWidth: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <RowActionMenu row={params.row} options={actionOptions} />
            ),
        }
    ];

    const onEdit = (row: UserRow) => console.log("Edit:", row);

    const onArchive = (row: UserRow) => console.log("Archive:", row);

    const actionOptions: RowActionOption<UserRow>[] = [
        {
            key: "edit",
            label: "Edit",
            icon: <CreateOutlinedIcon fontSize="small" />,
            onClick: onEdit,
        },
        {
            key: "assignClinic",
            label: "Assign Clinic",
            icon: <CallMadeOutlinedIcon fontSize="small" />,
            onClick: onArchive,
        },
    ];

    const handleNavigate = (params: GridRenderCellParams) => {
        console.log("Navigate:", params)
    }
    return (
        <div>
            <DataGrid
                rows={userRows}
                columns={columns}
                pageSizeOptions={[10]}
                sx={dataGridStyles}
                disableRowSelectionOnClick={true}
            />
        </div>
    )
}

export default UsersList
