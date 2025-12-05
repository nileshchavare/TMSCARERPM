import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import {
  RowActionMenu,
  type RowActionOption,
} from "../../../components/common-components/table/RowActionDrawer";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { userRows } from "../settings/DummyData/dummy";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import { dataGridStyles } from "../../../styles/dataGridStyles";
import type { UserRow } from "../settings/types/type";
import CommonStatusChip from "../../../components/common-components/common-status-chip/CommonStatusChip";
import { Grid, Typography } from "@mui/material";
import MainDrawer from "../../../components/ui/MainDrawer";
import UserDetails from "./user-details";
import { useDrawer } from "../../../hooks/useDrawer";
// import type { GridRenderCellParams } from '@mui/x-data-grid';
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AssignClinic from "../../../forms/assign-clinic-form";
import { useState } from "react";
import type { UserData } from "./constant";
const DrawerContent = ({
  identifier,
  onClose,
  user,
}: {
  identifier: string;
  onClose?: () => void;
  user?: UserData;
}) => {
  if (identifier === "drawer-user-details") {
    return <UserDetails onClose={onClose} user={user} />;
  }
  if (identifier === "drawer-assign-clinic") {
    return <AssignClinic onClose={onClose} />;
  }
  return null;
};

const UsersList = () => {
  const [user, setUser] = useState<UserData>();
  const {
    open: openDrawer,
    close: closeDrawer,
    content: contentDrawer,
  } = useDrawer();
  const columns: GridColDef<(typeof userRows)[number]>[] = [
    {
      field: "username",
      headerName: "Name",
      flex: 1,
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
    { field: "email", headerName: "Email Id", minWidth: 330 },
    { field: "contactNumber", headerName: "Contact Number", minWidth: 300 },
    { field: "role", headerName: "Role", sortable: false, minWidth: 200 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 160,
      renderCell: (params) => <CommonStatusChip value={params.value} />,
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 100,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <RowActionMenu row={params.row} options={actionOptions} />
      ),
    },
  ];

  // row: userRow here we pass this
  const onEdit = () => {};

  const onArchive = () => {};

  const onAssignClinic = () => {
    openDrawer({
      identifier: "drawer-assign-clinic",
      title: "Assign Clinic",
      componentId: "user-details",
    });
  };

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
      onClick: onAssignClinic,
    },
    {
      key: "archive",
      label: "Archive",
      icon: <Inventory2OutlinedIcon fontSize="small" />,
      onClick: onArchive,
    },
  ];

  // params: GridRenderCellParams
  const handleNavigate = (_params: UserData) => {
    setUser(_params);
    openDrawer({
      identifier: "drawer-user-details",
      title: "User Details",
      componentId: "user-details",
    });
  };

  return (
    <>
      <Grid>
        <DataGrid
          rows={userRows}
          columns={columns}
          pageSizeOptions={[10]}
          sx={dataGridStyles}
          disableRowSelectionOnClick={true}
        />
      </Grid>
      <MainDrawer
        drawerWidth="380px"
        anchor="right"
        componentId="user-details"
        showSecondButton
        content={
          <DrawerContent
            onClose={closeDrawer}
            identifier={contentDrawer.identifier ?? ""}
            user={user}
          />
        }
      />
    </>
  );
};

export default UsersList;
