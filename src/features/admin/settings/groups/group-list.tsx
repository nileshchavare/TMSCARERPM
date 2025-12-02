import { groupRows } from "../DummyData/dummy";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { dataGridStyles } from "../../../../styles/dataGridStyles";
import type { GridColDef } from "@mui/x-data-grid";
import type { GroupRow } from "../types/type";
import {
  RowActionMenu,
  type RowActionOption,
} from "../../../../components/common-components/table/RowActionDrawer";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const GroupList = () => {
  const userRowActions: RowActionOption<GroupRow>[] = [
    {
      key: "edit",
      label: "Edit",
      icon: <CreateOutlinedIcon fontSize="small" />,
      onClick: () => {},
    },
    {
      key: "archive",
      label: "Archive",
      icon: <Inventory2OutlinedIcon fontSize="small" />,
      onClick: () => {},
    },
  ];

  const groupColumns: GridColDef<GroupRow>[] = [
    { field: "groupName", headerName: "Group Name", flex: 1 },
    { field: "GroupMember", headerName: "Group Member", flex: 1 },

    {
      field: "action",
      headerName: "Action",
      minWidth: 100,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <RowActionMenu row={params.row} options={userRowActions} />
      ),
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={groupRows}
        columns={groupColumns}
        pageSizeOptions={[5, 10, 25]}
        sx={dataGridStyles}
      />
    </Box>
  );
};

export default GroupList;
