import React from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import CustomTabs from "../../../components/common-components/custom-tab/CustomTabs";
import CustomInput from "../../../components/common-components/custom-input/custom-input";

import { useForm, Controller } from "react-hook-form";

import AddClinicForm from "../../../forms/AddClinicForm";
import ArchiveList from "./ArchiveList";
import AllClinicList from "./AllClinicList";

import MainDrawer from "../../../components/ui/MainDrawer";
import { useDrawer } from "../../../hooks/useDrawer";

const Clinics: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { control } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const { open: openDrawer, close: closeDrawer, content: contentDrawer } = useDrawer();

  const openAddClinic = () => {
    openDrawer({
      identifier: "drawer-add-clinic",
      title: "Add Clinic",
    });
  };

  const tabs = ["All Clinics", "Archived"];

  const tabComponents = [<AllClinicList />, <ArchiveList />];

  const DrawerContent = ({ identifier ,onClose}: { identifier: string, onClose?: () => void }) => {
    if (identifier === "drawer-add-clinic") {
      return <AddClinicForm onClose={onClose} />;
    }
    return <></>;
  };

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
            mb: 3,
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
                  placeholder="Search Clinics..."
                  bgWhite
                  hasStartSearchIcon
                  onDebounceCall={(v) => console.log("Searching:", v)}
                />
              )}
            />
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={openAddClinic}
              sx={(theme)=>({width:'180px'})}
            >
              Add Clinic
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>{tabComponents[tabValue]}</Box>
      </Box>
      <MainDrawer
        drawerWidth="700px"
        anchor="right"
        content={<DrawerContent onClose={closeDrawer} identifier={contentDrawer.identifier ?? ""} />}
      />
    </>
  );
};

export default Clinics;
