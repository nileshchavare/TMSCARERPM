import { Grid } from "@mui/material";
import PatientDemographicsHeader from "./patient-demographics-header";
import CustomTabs from "../../../../components/common-components/custom-tab/CustomTabs";
import { useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import PatientDemographicsTaskList from "./patient-demographics-task/patient-demographics-task-list";

const tabs = [
  "Vitals",
  "Alerts",
  "Task",
  "Care Team",
  "Documents",
  "Time Log",
  "Billing",
];

/*** Map tab names to URL-friendly parameters ***/
const tabToParam: Record<string, string> = {
  Vitals: "vitals",
  Alerts: "alerts",
  Task: "task",
  "Care Team": "care-team",
  Documents: "documents",
  "Time Log": "time-log",
  Billing: "billing",
};

/*** Map URL parameters back to tab indices ***/
const paramToTabIndex: Record<string, number> = {
  vitals: 0,
  alerts: 1,
  task: 2,
  "care-team": 3,
  documents: 4,
  "time-log": 5,
  billing: 6,
};

const PatientDemographicsTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /*** Get current tab from URL param, fallback to first tab (Vitals) ***/
  const tabParam = searchParams.get("tab")?.toLowerCase() || "vitals";
  const tabValue = paramToTabIndex[tabParam] ?? 0;

  /*** Ensure URL always has a valid tab param ***/
  useEffect(() => {
    if (!searchParams.get("tab") || !paramToTabIndex[tabParam]) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("tab", "vitals");
      setSearchParams(newSearchParams, { replace: true });
    }
  }, [searchParams, setSearchParams, tabParam]);

  /*** Handle tab change - update URL ***/
  const handleTabChange = useCallback(
    (newTabValue: number) => {
      const tabName = tabs[newTabValue];
      const param = tabToParam[tabName] || tabToParam["Vitals"];
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("tab", param);
      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams],
  );

  return (
    <Grid container width={"100%"} flexDirection={"column"} rowGap={2} p={1.7}>
      <PatientDemographicsHeader />
      <Grid container>
        <CustomTabs tabs={tabs} value={tabValue} onChange={handleTabChange} />
      </Grid>
      <Grid container>{tabValue === 2 && <PatientDemographicsTaskList />}</Grid>
    </Grid>
  );
};
export default PatientDemographicsTab;
