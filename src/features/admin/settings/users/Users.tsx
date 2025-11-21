
import { userRows } from '../DummyData/dummy';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { dataGridStyles } from '../../../../styles/dataGridStyles';
import { userColumns } from '../userColumns/user.columns';

const Users = () => {
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
