import { DataGrid, type GridColDef, type GridRenderCellParams } from "@mui/x-data-grid"
import { dataGridStyles } from "../../../styles/dataGridStyles"
import { locationRows } from "../settings/DummyData/dummy"
import CommonStatusChip from "../../../components/common-components/common-status-chip/CommonStatusChip"
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Typography } from "@mui/material";

const LocationList = () => {
  const locationColumn: GridColDef[] = [
    {
      field: "locationName", headerName: "Location Name", width: 200,
      renderCell: (params) => <Typography variant="body14PX500FW" sx={{ cursor: "pointer" }} color="primary.70" onClick={() => handleNavigate(params)} >{params.value}</Typography>,
    },
    { field: "phoneNumber", headerName: "Phone Number", width: 200 },
    { field: "email", headerName: "Email", width: 250, flex: 1 },
    { field: "npiNumber", headerName: "NPI Number", width: 200 },
    { field: "taxNumber", headerName: "Tax Number", width: 200 },
    { field: "address", headerName: "Address", width: 250, flex: 1 },
    { field: "status", headerName: "Status", width: 200, renderCell: (params) => <CommonStatusChip value={params.value} /> },
    { field: "action", headerName: "Action", width: 90, renderCell: (params) => <CreateOutlinedIcon onClick={() => handleEdit(params)} sx={(theme) => ({ cursor: "pointer", color: theme.palette.neutral[70] })} /> },
  ]

  const handleNavigate = (params: GridRenderCellParams) => {
    console.log("Navigate:", params)
  }

  const handleEdit = (params: GridRenderCellParams) => {
    console.log("Edit:", params)
  }
  return (
    <>
      <DataGrid
        columns={locationColumn}
        rows={locationRows}
        pageSizeOptions={[5, 10, 15]}
        sx={dataGridStyles}
        disableRowSelectionOnClick={true}
      />
    </>
  )
}

export default LocationList
