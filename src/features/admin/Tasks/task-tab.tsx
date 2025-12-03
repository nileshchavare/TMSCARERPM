import { Box, Button, Grid } from "@mui/material";
import CustomTabs from "../../../components/common-components/custom-tab/CustomTabs";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "../../../components/common-components/custom-input/custom-input";
import MainDrawer from "../../../components/ui/MainDrawer";
import AddIcon from "@mui/icons-material/Add";
import TaskForm from "../../../forms/task-form";
import { useState } from "react";
import { useDrawer } from "../../../hooks/useDrawer";
import TaskList from "./task-list";
import DropDownForText from "../../../components/common-components/drop-dwon-for-text/drop-down-for-text";
import { SPECIALTY_OPTIONS } from "../clinics/constant";
import { PRIORITY_OPTIONS } from "./constant";

const DrawerContent = ({
  identifier,
  onClose,
}: {
  identifier: string;
  onClose?: () => void;
}) => {
  if (identifier === "drawer-add-task") {
    return <TaskForm onClose={onClose} />;
  }
  return <></>;
};

const Tasks = () => {
  const [tabValue, setTabValue] = useState(0);
  const { control, setValue, getValues } = useForm({
    defaultValues: {
      search: "",
      status: "",
      priority: "",
    },
  });

  const {
    open: openDrawer,
    close: closeDrawer,
    content: contentDrawer,
  } = useDrawer();

  const openAddTask = () => {
    openDrawer({
      identifier: "drawer-add-task",
      title: "Add New Task",
    });
  };

  const tabs = ["All", "Indivisual", "Group"];
  const tabComponents = [TaskList, TaskList, TaskList];
  const ActiveTab = tabComponents[tabValue];
  return (
    <>
      <Grid
        container
        width={"100%"}
        height={"100%"}
        flexDirection={"column"}
        flexWrap={"nowrap"}
        rowGap={2}
        p={2}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
          }}
        >
          <CustomTabs tabs={tabs} value={tabValue} onChange={setTabValue} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              width: { xs: "100%", md: "auto" },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Controller
              name="search"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  placeholder="Search Task"
                  bgWhite
                  hasStartSearchIcon
                  onDebounceCall={() => {}}
                />
              )}
            />

            <Grid size={{ xs: 12, sm: "auto" }}>
              <DropDownForText
                value={getValues("status")}
                options={SPECIALTY_OPTIONS}
                onChange={(e) => setValue("status", e.target.value)}
                placeholder="Status"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: "auto" }}>
              <DropDownForText
                value={getValues("priority")}
                options={PRIORITY_OPTIONS}
                onChange={(e) => setValue("priority", e.target.value)}
                placeholder="Priority"
              />
            </Grid>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={openAddTask}
              sx={() => ({ width: "250px" })}
            >
              New Task
            </Button>
          </Box>
        </Box>

        <Box>
          <ActiveTab />
        </Box>
      </Grid>
      <MainDrawer
        drawerWidth="700px"
        anchor="right"
        showMandatoryIndicator
        content={
          <DrawerContent
            onClose={closeDrawer}
            identifier={contentDrawer.identifier ?? ""}
          />
        }
      />
    </>
  );
};

export default Tasks;
