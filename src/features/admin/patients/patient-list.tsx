import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { dataGridStyles } from "../../../styles/dataGridStyles";
import { patientRows } from "../settings/DummyData/dummy";
import type { PatientRow } from "../settings/types/type";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "../../../components/common-components/custom-input/custom-input";
import { STATUS_OPTIONS } from "../clinics/constant";
import DropDownForText from "../../../components/common-components/drop-dwon-for-text/drop-down-for-text";
import { errorStyle } from "../../../components/common-components/custom-input/widgets/custom-input-styles";

const PatientList: React.FC = () => {
  const defaultValues = {
    search: '',
    status: '',
  }
  const { control, formState: { errors } } = useForm({
    defaultValues
  })
  const patientColumns: GridColDef<PatientRow>[] = [
    {
      field: "patientId",
      headerName: "Patient ID",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "patientName",
      headerName: "Patient Name",
      flex: 1.2,
      minWidth: 150,
    },
    {
      field: "referringProvider",
      headerName: "Referring Provider",
      flex: 1.5,
      minWidth: 180,
    },
    {
      field: "clinicName",
      headerName: "Clinic Name",
      flex: 1.5,
      minWidth: 180,
    },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      flex: 1,
      minWidth: 140,


    },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      flex: 1.2,
      minWidth: 150,
    },
    {
      field: "email",
      headerName: "Email ID",
      flex: 1.5,
      minWidth: 200,
    },
  ];

  return (
    <Grid container width={"100%"} height={"100%"} flexDirection={"column"} flexWrap={'nowrap'} rowGap={2} p={2}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 2.,
        }}
      >
        <Typography variant="body18PX600FW" color="neutral.90" >All Patients</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            width: { xs: "100%", md: "auto" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box>

            <Controller
              name="search"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  placeholder="Search Patient Name"
                  bgWhite
                  hasStartSearchIcon
                  onDebounceCall={(v) => console.log("Searching:", v)}
                />
              )}
            />
          </Box>
          <Box>

            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <>
                  <DropDownForText
                    options={STATUS_OPTIONS}
                    value={field.value ?? "ACTIVE"}
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    selectSx={{backgroundColor:'#FFFFFF',minWidth:'7rem'}}
                  />
                  {errors?.status && (
                    <Typography textAlign={"start"} sx={errorStyle} variant="caption">
                      {errors?.status?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={patientRows}
          columns={patientColumns}
          pageSizeOptions={[5, 10, 15]}
          sx={dataGridStyles}
        />
      </Box>
    </Grid>
  );
};

export default PatientList;
