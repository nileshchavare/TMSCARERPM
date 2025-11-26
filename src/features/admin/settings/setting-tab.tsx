import { Box, Grid } from '@mui/material'
import React from 'react'
import CustomTabs from '../../../components/common-components/custom-tab/CustomTabs'
import { Controller, useForm } from 'react-hook-form';
import CustomInput from '../../../components/common-components/custom-input/custom-input';
import { GridAddIcon } from '@mui/x-data-grid';
import Users from './users/Users';
import RollsAndPermissions from './rollsandpermissions/RollsAndPermissions';
import Groups from './groups/Groups';
import DropdownButton from '../../../components/common-components/drop-down-for-button/drop-down-for-button';
import MainDrawer from '../../../components/ui/MainDrawer';
import AddStaffForm from '../../../forms/staff-form';
import AddProviderForm from '../../../forms/provider-form';
import { useDrawer } from '../../../hooks/useDrawer';

const index = () => {
  const tabs = ["Users", "Roll and Permissions", "Groups"];
  const [tabValue, setTabValue] = React.useState(0);
  const tabComponents = [<Users />, <RollsAndPermissions />, <Groups />];
  const { open: openDrawer, close: closeDrawer, content: contentDrawer } = useDrawer();
  const { control } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const handleStaff = () => {
    openDrawer({
      identifier: "drawer-add-staff",
      title: "Add Staff User",
    });
  }
  const handleProvider = () => {
    openDrawer({
      identifier: "drawer-add-provider",
      title: "Add Provider",
    });
  }

  const DrawerContent = ({ identifier ,onClose}: { identifier: string, onClose?: () => void }) => {
    if (identifier === "drawer-add-staff") {
      return <AddStaffForm onClose={onClose} />;
    }
    if (identifier === "drawer-add-provider") {
      return <AddProviderForm onClose={onClose} />;
    }
  }
  return (
    <>
     <Grid container width={"100%"} height={"100%"} flexDirection={"column"} flexWrap={'nowrap'} rowGap={1.5} p={2}>
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
          {tabValue === 0 && <Box
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
                  placeholder="Search..."
                  bgWhite
                  hasStartSearchIcon
                  onDebounceCall={(v) => console.log("Searching:", v)}
                />
              )}
            />
            <DropdownButton
              label="Add New User"
              startIcon={<GridAddIcon />}
              width="220px"
              options={[
                {
                  key: "staff",
                  label: "Staff",
                  onClick: handleStaff,
                },
                {
                  key: "provider",
                  label: "Provider",
                  onClick: handleProvider,
                },
              ]}
            />
          </Box>}
        </Box>
        <Box >{tabComponents[tabValue]}</Box>
      </Grid>
      <MainDrawer
        drawerWidth='700px'
        anchor='right'
        showMandatoryIndicator
        content={<DrawerContent onClose={closeDrawer} identifier={contentDrawer?.identifier || ""} />}
      />
    </>
  )
}

export default index