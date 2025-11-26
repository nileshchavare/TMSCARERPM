import { Box, Button, Grid, Typography } from "@mui/material";
import CustomSingleCheckBox from "../../../components/common-components/custom-checkbox/single-checkbox";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { SPECIALTY_OPTIONS } from "../clinics/constant";
import DropDownForText from "../../../components/common-components/drop-dwon-for-text/drop-down-for-text";
import CustomInput from "../../../components/common-components/custom-input/custom-input";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { dataGridStyles } from "../../../styles/dataGridStyles";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CommonStatusChip from "../../../components/common-components/common-status-chip/CommonStatusChip";

interface AssignedPatientListProps {
  patients: any[];
}

const AssignedPatientList = ({ patients }: AssignedPatientListProps) => {
  const [archive, setArchive] = useState(false);
  const [val, setVal] = useState("");

  const handleArchiveChange = () => setArchive(!archive);
  const handleSearch = () => console.log(val);


const rows = patients;

  const columns: GridColDef[] = [
    { field: "patientId", headerName: "Patient ID", width: 80, renderCell:(params)=><Typography variant="body14PX500FW" color="neutral.80" >{params.value}</Typography> },
    { field: "patientName", headerName: "Patient Name", minWidth: 160, flex: 1 },
    { field: "primaryProvider", headerName: "Primary Provider", minWidth: 160, flex:1 },
    { field: "dateOfBirth", headerName: "Date of Birth", minWidth: 100 },
    { field: "lastReview", headerName: "Last Review", minWidth: 100 },
    {
      field: "gmi",
      headerName: "GMI (%)",
      minWidth: 100,
      renderCell: (params) => `${params.value}%`,
    },
    {
      field: "timeInRange",
      headerName: "Time in Range (%)",
      minWidth: 100,
      renderCell: (params) => `${params.value}%`,
    },
    { field: "status", headerName: "Status", minWidth: 100, renderCell: (params) => <CommonStatusChip value={params.value} />, },
    {
      field: "action",
      headerName: "Action",
      minWidth: 100,
      sortable: false,
      renderCell: () => (<Button sx={(theme) => ({ color: theme.palette.neutral[70] })} startIcon={<Inventory2Icon />} />),
    },
  ];

  return (
    <Box p={1.5} width={"100%"}>
      <Grid
        container
        alignItems="end"
        justifyContent="space-between"
        rowGap={2}
      >

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="body18PX600FW">Assigned Patients</Typography>
        </Grid>

        <Grid
          // size={{ xs:   12, md: 8 }}
          container
          alignItems="end"
          justifyContent="flex-end"
          columnGap={2}
          rowGap={2}
        >

          <Grid >
            <CustomSingleCheckBox
              checked={archive}
              handleChange={handleArchiveChange}
              label="Show Archived"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 'auto' }} sx={{ marginLeft: '10px' }}>
            <Box >
              <DropDownForText
                value={val}
                options={SPECIALTY_OPTIONS}
                onChange={(e: any) => setVal(e.target.value)}
                placeholder="Status"
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 'auto' }}>
            <Box sx={{ width: { xs: "100%", sm: "220px" } }}>
              <CustomInput
                name="patient"
                value={val}
                placeholder="Search Patient / Provider"
                bgWhite
                onChange={(e: any) => setVal(e.target.value)}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 'auto' }}>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              sx={{ width: { xs: "100%", sm: "150px" } }}
              onClick={handleSearch}
            >
              Assign Patient
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ mt: 2 }} >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5]}
          sx={dataGridStyles}
          disableRowSelectionOnClick={true}
        />
      </Box>
    </Box>
  );
};

export default AssignedPatientList;


