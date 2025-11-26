import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import CustomInput from '../../../components/common-components/custom-input/custom-input';
import CustomTabs from '../../../components/common-components/custom-tab/CustomTabs';
import MainDrawer from '../../../components/ui/MainDrawer';
import { useDrawer } from '../../../hooks/useDrawer';
import { useState } from 'react';
import UsersList from './user-list';
import AddStaffForm from '../../../forms/staff-form';
import AddProviderForm from '../../../forms/provider-form';
import DropdownButton from '../../../components/common-components/drop-down-for-button/drop-down-for-button';
import { GridAddIcon } from '@mui/x-data-grid';
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LocationList from './location-list';
import AddLocationForm from '../../../forms/location-form';

const ClinicDetails = () => {
    const [tabValue, setTabValue] = useState(0);
    const tabs = ["User", "Location"];
    const tabComponents = [<UsersList />, <LocationList />];

    const { control } = useForm({
        defaultValues: {
            search: "",
        },
    });

    const {
        open: openDrawer,
        close: closeDrawer,
        content: contentDrawer,
    } = useDrawer();

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

    const DrawerContent = ({ identifier, onClose }: { identifier: string, onClose?: () => void }) => {
        if (identifier === "drawer-add-staff") {
            return <AddStaffForm onClose={onClose} />;
        }
        if (identifier === "drawer-add-provider") {
            return <AddProviderForm onClose={onClose} />;
        }
        if (identifier === "drawer-add-location") {
            return <AddLocationForm onClose={onClose} />;
        }
    }

    const handleEditClinicProfile = () => {
        console.log("edit")
    }
    const handleLocation = () => {
        openDrawer({
            identifier: "drawer-add-location",
            title: "Add Location",
        });
    }

    return (
        <>
            <Grid container width={"100%"} height={"100%"} flexDirection={"column"} flexWrap={'nowrap'} rowGap={2} p={2}>
                <Card
                    sx={{
                        border: "1px solid",
                        borderColor: "neutral.5",
                        boxShadow: "none",
                        borderRadius: 2,
                    }}
                >
                    <CardContent sx={{ p: 2 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" gap={2}>
                            <Typography variant="body20PX500FW" color="neutral.90">
                                Jupiter Hospital
                            </Typography>
                            <Button
                                startIcon={<CreateOutlinedIcon />}
                                variant="outlined"
                                sx={(theme) => ({
                                    backgroundColor: theme.palette.primary[10],
                                    padding: "4px 10px",
                                })}
                                onClick={handleEditClinicProfile}
                            >
                                Edit
                            </Button>
                        </Box>

                        <Box sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 4 }}>
                                    <Box display={'grid'} alignItems={'column'} columnGap={1.5} gridTemplateColumns={'auto 1fr'}>
                                        <Typography variant="body14PX400FW" color="neutral.50">
                                            Clinic NPI Number :
                                        </Typography>
                                        <Typography variant="body14PX400FW" color="neutral.80">
                                            1234567890
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid size={{ xs: 12, md: 4 }}>
                                    <Box display={'grid'} alignItems={'column'} columnGap={1.5} gridTemplateColumns={'auto 1fr'}>
                                        <Typography variant="body14PX400FW" color="neutral.50">
                                            Tax Type :
                                        </Typography>
                                        <Typography variant="body14PX400FW" color="neutral.80">
                                            EIN
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid size={{ xs: 12, md: 4 }}>
                                    <Box display={'grid'} alignItems={'column'} columnGap={1.5} gridTemplateColumns={'auto 1fr'}>
                                        <Typography variant="body14PX400FW" color="neutral.50">
                                            Tax Number :
                                        </Typography>
                                        <Typography variant="body14PX400FW" color="neutral.80">
                                            AB12345
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid size={{ xs: 12, md: 4 }}>
                                    <Box display={'grid'} alignItems={'column'} columnGap={1.5} gridTemplateColumns={'auto 1fr'}>
                                        <Typography variant="body14PX400FW" color="neutral.50">
                                            Email ID :
                                        </Typography>
                                        <Typography variant="body14PX400FW" color="neutral.80">
                                            clinic@gmail.com
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid size={{ xs: 12, md: 4 }}>
                                    <Box display={'grid'} alignItems={'column'} columnGap={1.5} gridTemplateColumns={'auto 1fr'}>
                                        <Typography variant="body14PX400FW" color="neutral.50">
                                            Contact Number:
                                        </Typography>
                                        <Typography variant="body14PX400FW" color="neutral.80">
                                            123-456-7890
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid size={{ xs: 12, md: 4 }}>
                                    <Box display={'grid'} alignItems={'column'} columnGap={1.5} gridTemplateColumns={'auto 1fr'}>
                                        <Typography variant="body14PX400FW" color="neutral.50">
                                            Address :
                                        </Typography>
                                        <Typography variant="body14PX400FW" color="neutral.80">
                                            123 Main Street, New York, NY 10001
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
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
                                    placeholder="Search Clinics..."
                                    bgWhite
                                    hasStartSearchIcon
                                    onDebounceCall={(v) => console.log("Searching:", v)}
                                />
                            )}
                        />
                        {tabValue === 0 && <DropdownButton
                            label="Add New User"
                            startIcon={<GridAddIcon />}
                            width="280px"
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
                        />}
                        {tabValue === 1 &&
                            <Button variant="contained" startIcon={<GridAddIcon />} sx={{ width: "280px" }} onClick={handleLocation} >Add New Location</Button>
                        }
                    </Box>
                </Box>

                <Box >{tabComponents[tabValue]}</Box>
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
    )
}

export default ClinicDetails
