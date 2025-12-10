import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  type Theme,
} from "@mui/material";
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
import { useDrawer } from "../../../../../hooks/useDrawer";
import MainDrawer from "../../../../../components/ui/MainDrawer";
import TaskPatientDemographicsForm from "../../../../../forms/task-patient-demographics-form";
import { useState } from "react";

const DrawerContent = ({
  identifier,
  onClose,
  isEdit,
}: {
  identifier: string;
  onClose?: () => void;
  isEdit: boolean;
}) => {
  if (identifier === "drawer-add-task-patient-demographics") {
    return <TaskPatientDemographicsForm onClose={onClose} isEdit={isEdit} />;
  }
  return <></>;
};

const PatientDemographicsTaskList = () => {
  const belowHeight768 = useMediaQuery("(max-height:768px)");
  const belowHeight900 = useMediaQuery("(max-height:900px)");
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

  const {
    open: openDrawer,
    close: closeDrawer,
    content: contentDrawer,
  } = useDrawer();

  const handleDrawer = {
    addTaskPatientDemographics: (action: string) => {
      setIsEditDrawerOpen(action === "Edit");
      openDrawer({
        title: `${action} Task`,
        identifier: "drawer-add-task-patient-demographics",
      });
    },
  };

  const patientColumns: GridColDef<(typeof patientTaskRows)[number]>[] = [
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
      renderCell: (params) => <CommonStatusChip value={params.value} />,
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

  const onEdit = (_row: PatientTaskRow) => {
    handleDrawer.addTaskPatientDemographics("Edit");
  };

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
            onClick={() => handleDrawer.addTaskPatientDemographics("Add")}
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
          sx={(theme) => ({
            ...(dataGridStyles as (theme: Theme) => Record<string, unknown>)(
              theme,
            ),
            height: belowHeight768
              ? "250px"
              : belowHeight900
                ? "400px"
                : "631px",
          })}
        />
      </Grid>
      <MainDrawer
        drawerWidth="700px"
        anchor="right"
        showMandatoryIndicator
        content={
          <DrawerContent
            onClose={closeDrawer}
            identifier={contentDrawer.identifier ?? ""}
            isEdit={isEditDrawerOpen}
          />
        }
      />
    </Grid>
  );
};
export default PatientDemographicsTaskList;
