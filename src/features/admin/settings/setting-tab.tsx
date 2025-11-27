import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import CustomTabs from '../../../components/common-components/custom-tab/CustomTabs'
import { Controller, useForm } from 'react-hook-form';
import CustomInput from '../../../components/common-components/custom-input/custom-input';
import { GridAddIcon } from '@mui/x-data-grid';
import Users from './users/Users';
import RollsAndPermissions from './rollsandpermissions/RollsAndPermissions';
import Groups from './groups/group-list';
import MainDrawer from '../../../components/ui/MainDrawer';
import AddStaffForm from '../../../forms/staff-form';
import { useDrawer } from '../../../hooks/useDrawer';
import AddGroupForm from '../../../forms/group-form';

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


  const handleGroup =()=>{
    openDrawer({
      identifier: "drawer-add-group",
      title: "Add New Group",
    });
  }

  const DrawerContent = ({ identifier ,onClose}: { identifier: string, onClose?: () => void }) => {
    if (identifier === "drawer-add-staff") {
      return <AddStaffForm onClose={onClose} />;
    }
    if (identifier === "drawer-add-group") {
      return <AddGroupForm onClose={onClose} />;
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
                       <Button
              startIcon={<GridAddIcon />}
              onClick={handleStaff}
              sx={{width:'180px'}}
              variant='contained'
            >Add Staff</Button>
          </Box>}

                    {tabValue === 2 && <Box
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
                  placeholder="Search Group Name"
                  bgWhite
                  hasStartSearchIcon
                  onDebounceCall={(v) => console.log("Searching:", v)}
                />
              )}
            />
            <Button
              startIcon={<GridAddIcon />}
              onClick={handleGroup}
              sx={{width:'180px'}}
              variant='contained'
            >Add Group</Button>
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