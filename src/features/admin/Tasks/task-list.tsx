import { Box, Typography } from "@mui/material";
import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import CommonStatusChip from "../../../components/common-components/common-status-chip/CommonStatusChip";
import {
  RowActionMenu,
  type RowActionOption,
} from "../../../components/common-components/table/RowActionDrawer";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { taskData } from "../settings/DummyData/dummy";
import { taskStatus, type TaskRow } from "./constant";
import CheckIcon from "@mui/icons-material/Check";
import { dataGridStyles } from "../../../styles/dataGridStyles";

const TaskList = () => {
  const navigate = useNavigate();

  const handleNavigate = (params: GridRenderCellParams) => {
    navigate(`/tps/clinic-details/${params.row.id}`);
  };

  const tasksColumn: GridColDef<(typeof taskData)[number]>[] = [
    {
      field: "taskTitle",
      headerName: "Task Title",
      minWidth: 300,
      sortable: false,
      filterable: false,
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="body14PX500FW"
          sx={{ cursor: "pointer" }}
          color="primary.70"
          onClick={() => handleNavigate(params)}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 150,
    },
    {
      field: "patientName",
      headerName: "Patient Name",
      minWidth: 220,
    },
    {
      field: "assignedBy",
      headerName: "Assigned By",
      minWidth: 220,
    },
    {
      field: "assignedTo",
      headerName: "Assigned To",
      minWidth: 220,
    },
    {
      field: "createdOn",
      headerName: "CreatedOn",
      minWidth: 100,
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      minWidth: 100,
    },
    {
      field: "source",
      headerName: "Source",
      minWidth: 100,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => {
        const label =
          taskStatus[params.value as keyof typeof taskStatus] || params.value;
        return <CommonStatusChip value={label} />;
      },
      minWidth: 150,
    },
    {
      field: "priority",
      headerName: "Priority",
      renderCell: (params) => <CommonStatusChip value={params.value} />,
      minWidth: 150,
    },
    {
      field: "actions",
      headerName: "Action",
      minWidth: 80,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <RowActionMenu row={params.row} options={actionOptions} />
      ),
    },
  ];
  // row: ClinicRow here we pass this
  const onEdit = () => {};

  const onArchive = () => {};

  const actionOptions: RowActionOption<TaskRow>[] = [
    {
      key: "edit",
      label: "Edit",
      icon: <CreateOutlinedIcon fontSize="small" />,
      onClick: onEdit,
    },
    {
      key: "completed",
      label: "Resolve Task",
      icon: <CheckIcon fontSize="small" />,
      onClick: onArchive,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={taskData}
        columns={tasksColumn}
        pageSizeOptions={[10]}
        sx={dataGridStyles}
        disableRowSelectionOnClick={true}
      />
    </Box>
  );
};

export default TaskList;
