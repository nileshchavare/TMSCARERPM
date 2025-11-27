import { useRef } from "react";
import DrawerBody from "../components/ui/DrawerBody"
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { Box, Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import CustomLabel from "../components/common-components/custom-label/custom-label";
import CustomInput from "../components/common-components/custom-input/custom-input";
import { stylesOfFooter } from "../components/ui/MainDrawer";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { dataGridStyles } from "../styles/dataGridStyles";
import { groupRow } from "../features/admin/settings/DummyData/dummy";
import type { GroupRow } from "../features/admin/settings/types/type";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const AddGroupForm = ({ onClose }: { onClose?: () => void }) => {
    const footerRef = useRef<HTMLDivElement>(null);
    const defaultValues: GroupRow = {
        groupName: '',
        GroupMember: '',
    }
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues,
    });

    const handleArchive = (data: GroupRow) => {
        console.log(data, 'data')
    }

    const onSubmit: SubmitHandler<GroupRow> = (data: any) => {
        console.log("SUBMIT:", data);
        reset(defaultValues);
        onClose?.();
    };

    const handleDrawerClose = () => {
        onClose?.();
    };

    const groupColumns: GridColDef<GroupRow>[] = [
        {
            field: "GroupMember",
            headerName: "Group Members",
            flex: 1,
            renderCell: (params) => (
                <Typography variant="body14PX500FW" sx={(theme)=>({color:theme.palette.neutral[80]})} >{params.row.GroupMember}</Typography>
            )
        },
        {
            field: "action",
            headerName: "Action",
            minWidth: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <Tooltip title="Archive Group">
                    <IconButton
                        size="small"
                        onClick={() => handleArchive(params.row)}
                    >
                        <DeleteOutlineOutlinedIcon sx={(theme)=>({color:theme.palette.neutral[70]})} fontSize="small" />
                    </IconButton>
                </Tooltip>
            ),
        },
    ];

    return (
        <DrawerBody padding="16px 20px" offset={footerRef?.current?.offsetHeight} gap={1}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <CustomLabel
                            variant="body5Medium"
                            label="Group Name"
                            color="neutral.60"
                            isRequired
                        />
                        <Controller
                            name="groupName"
                            control={control}
                            render={({ field }) => (
                                <CustomInput
                                    {...field}
                                    value={field.value ?? ""}
                                    placeholder="Enter Group Name"
                                    bgWhite
                                    hasError={!!errors.groupName}
                                    errorMessage={errors.groupName?.message as string}
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <CustomLabel
                            variant="body5Medium"
                            label="Group Name"
                            color="neutral.60"
                            isRequired
                        />
                        <Controller
                            name="GroupMember"
                            control={control}
                            render={({ field }) => (
                                <CustomInput
                                    {...field}
                                    value={field.value ?? ""}
                                    placeholder="Enter Group Name"
                                    bgWhite
                                    hasError={!!errors.GroupMember}
                                    errorMessage={errors.GroupMember?.message as string}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 12 }} >
                        <DataGrid
                            rows={groupRow}
                            columns={groupColumns}
                            sx={dataGridStyles}
                            pageSizeOptions={[5, 10, 25]}
                        />
                    </Grid>
                </Grid>
                <Box ref={footerRef} sx={stylesOfFooter}>
                    <Grid container columnGap={1} justifyContent={"flex-end"}>
                        <Grid>
                            <Button onClick={handleDrawerClose} variant="outlined" type="button">
                                <Typography variant="body14PX500FW">Cancel</Typography>
                            </Button>
                        </Grid>
                        <Grid>
                            <Button variant="contained" type="submit">
                                <Typography variant="body14PX500FW">Save</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </DrawerBody>
    )
}

export default AddGroupForm
