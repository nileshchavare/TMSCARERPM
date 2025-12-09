import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import DropDownForText from "../../../../../components/common-components/drop-dwon-for-text/drop-down-for-text";
import { TASK_STATUS_OPTIONS } from "../../../clinics/constant";
import AddIcon from "@mui/icons-material/Add";
import { dataGridStyles } from "../../../../../styles/dataGridStyles";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { patientTaskRows } from "../../../settings/DummyData/dummy";
import type { PatientTaskRow } from "../../../Tasks/constant";
import {
  RowActionMenu,
  type RowActionOption,
} from "../../../../../components/common-components/table/RowActionDrawer";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CommonStatusChip from "../../../../../components/common-components/common-status-chip/CommonStatusChip";

const PatientDemographicsTaskList = () => {
  const belowHeight768 = useMediaQuery("(max-height:768px)");
  const belowHeight900 = useMediaQuery("(max-height:900px)");

  const patientColumns: GridColDef<PatientTaskRow>[] = [
    {
      field: "taskName",
      headerName: "Task Name",
      flex: 1,
    },
    {
      field: "Priority",
      headerName: "Priority",
      flex: 1,
      renderCell: (params) => <CommonStatusChip value={params.value} />,
    },
    {
      field: "reviewedBy",
      headerName: "Reviewed By",
      flex: 1,
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      flex: 1,
    },
    {
      field: "taskStatus",
      headerName: "Task Status",
      flex: 1,
    },
    {
      field: "taskType",
      headerName: "Task Type",
      flex: 1,
    },
    {
      field: "completedDate",
      headerName: "Completed Date",
      flex: 1,
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

  const onEdit = () => {};

  const onDelete = () => {};

  const onResolveTask = () => {};

  const actionOptions: RowActionOption<PatientTaskRow>[] = [
    {
      key: "resolve task",
      label: "Resolve Task",
      icon: <CheckIcon fontSize="small" />,
      onClick: onResolveTask,
    },
    {
      key: "edit",
      label: "Edit Task",
      icon: <CreateOutlinedIcon fontSize="small" />,
      onClick: onEdit,
    },
    {
      key: "delete",
      label: "Delete",
      icon: <DeleteOutlinedIcon fontSize="small" />,
      onClick: onDelete,
    },
  ];

  return (
    <Grid container width={"100%"} flexDirection={"column"} rowGap={2}>
      <Grid container width={"100%"} justifyContent={"space-between"}>
        <Typography variant="body18PX600FW">Tasks</Typography>
        <Grid container columnGap={1} width={"50%"} justifyContent={"flex-end"}>
          <DropDownForText
            options={TASK_STATUS_OPTIONS}
            value={""}
            onChange={() => {}}
            width="20%"
            selectSx={{ backgroundColor: "#FFFFFF", minWidth: "7rem" }}
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {}}
            sx={() => ({ width: "110px" })}
          >
            Add Task
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ width: "100%" }}>
        <DataGrid
          rows={patientTaskRows}
          columns={patientColumns}
          pageSizeOptions={[5, 10, 15]}
          sx={{
            ...dataGridStyles,
            height: belowHeight768
              ? "250px"
              : belowHeight900
                ? "400px"
                : "631px",
          }}
        />
      </Grid>
    </Grid>
  );
};
export default PatientDemographicsTaskList;
