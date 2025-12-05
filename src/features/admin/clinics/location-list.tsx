import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { dataGridStyles } from "../../../styles/dataGridStyles";
import { locationRows } from "../settings/DummyData/dummy";
import CommonStatusChip from "../../../components/common-components/common-status-chip/CommonStatusChip";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Grid, Typography } from "@mui/material";
import MainDrawer from "../../../components/ui/MainDrawer";
import LocationDetails from "./location-details";
import { useDrawer } from "../../../hooks/useDrawer";
import { useState } from "react";
import type { LocationData } from "./constant";

const DrawerContent = ({
  identifier,
  location,
}: {
  identifier: string;
  onClose: () => void;
  location?: LocationData;
}) => {
  if (!location) return null;
  if (identifier === "drawer-location-details") {
    return <LocationDetails location={location} />;
  }

  return null;
};

const LocationList = () => {
  const [location, setLocation] = useState<LocationData>();
  const {
    open: openDrawer,
    close: closeDrawer,
    content: contentDrawer,
  } = useDrawer();

  // here we used params: GridRenderCellParams
  const handleNavigate = (params: LocationData) => {
    setLocation(params);
    openDrawer({
      identifier: "drawer-location-details",
      title: "Location",
      componentId: "location-details",
    });
  };

  const locationColumn: GridColDef[] = [
    {
      field: "locationName",
      headerName: "Location Name",
      width: 200,
      renderCell: (params) => (
        <Typography
          variant="body14PX500FW"
          sx={{ cursor: "pointer" }}
          color="primary.70"
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate(params.row);
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    { field: "phoneNumber", headerName: "Phone Number", width: 200 },
    { field: "email", headerName: "Email", width: 250, flex: 1 },
    { field: "npiNumber", headerName: "NPI Number", width: 200 },
    { field: "taxNumber", headerName: "Tax Number", width: 200 },
    { field: "address", headerName: "Address", width: 250, flex: 1 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => <CommonStatusChip value={params.value} />,
    },
    {
      field: "action",
      headerName: "Action",
      width: 90,
      renderCell: () => (
        <CreateOutlinedIcon
          onClick={() => handleEdit()}
          sx={(theme) => ({
            cursor: "pointer",
            color: theme.palette.neutral[70],
          })}
        />
      ),
    },
  ];
  // here we used params: GridRenderCellParams
  const handleEdit = () => {};
  return (
    <>
      <Grid>
        <DataGrid
          columns={locationColumn}
          rows={locationRows}
          pageSizeOptions={[5, 10, 15]}
          sx={dataGridStyles}
          disableRowSelectionOnClick={true}
        />
      </Grid>

      <MainDrawer
        drawerWidth="1000px"
        componentId="location-details"
        anchor="right"
        showSecondButton
        content={
          <DrawerContent
            identifier={contentDrawer.identifier ?? ""}
            location={location}
            onClose={closeDrawer}
          />
        }
      />
    </>
  );
};

export default LocationList;
