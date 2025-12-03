import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import DrawerBody from "../components/ui/DrawerBody";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLayoutEffect, useRef, useState } from "react";
import { newTaskSchema, type NewTaskformValues } from "./validations/schema";
import { Box, Button, Grid, Typography } from "@mui/material";
import { stylesOfFooter } from "../components/ui/MainDrawer";
import CustomLabel from "../components/common-components/custom-label/custom-label";
import DropDownForText from "../components/common-components/drop-dwon-for-text/drop-down-for-text";
import CustomInput from "../components/common-components/custom-input/custom-input";
import {
  ASSIGNED_TO_OPTIONS,
  PATIENT_NAME_OPTIONS,
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
  TASK_CATEGORY_OPTIONS,
} from "../features/admin/Tasks/constant";
import { errorStyle } from "../components/common-components/custom-input/widgets/custom-input-styles";
import CustomDatePicker from "../components/common-components/date-picker-field/date-picker-field";
import CustomSingleCheckBox from "../components/common-components/custom-checkbox/single-checkbox";

const TaskForm = ({ onClose }: { onClose?: () => void }) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, []);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewTaskformValues>({
    resolver: yupResolver(newTaskSchema),
    defaultValues: {
      taskCategory: "",
      taskTitle: "",
      patientName: "",
      assignedTo: "",
      date: "",
      status: "",
      priority: "",
      reminder: "",
      repeat: "",
    },
  });

  const onSubmit: SubmitHandler<NewTaskformValues> = () => {
    reset();
    onClose?.();
  };

  const handleDrawerClose = () => {
    onClose?.();
  };
  return (
    <DrawerBody padding="16px 20px" offset={footerHeight} gap={1}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 12 }}>
            <CustomLabel
              variant="body5Medium"
              label="Task Category"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="taskCategory"
              control={control}
              render={({ field }) => (
                <>
                  <DropDownForText
                    options={TASK_CATEGORY_OPTIONS}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select Task Category"
                  />
                  {errors.taskCategory && (
                    <Typography
                      textAlign={"start"}
                      sx={errorStyle}
                      variant="caption"
                    >
                      {errors.taskCategory?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 12 }}>
            <CustomLabel
              variant="body5Medium"
              label="Title"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="taskTitle"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  placeholder="Enter Title"
                  value={field.value ?? ""}
                  bgWhite
                  hasError={!!errors.taskTitle}
                  errorMessage={errors.taskTitle?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Patient Name"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="patientName"
              control={control}
              render={({ field }) => (
                <>
                  <DropDownForText
                    options={PATIENT_NAME_OPTIONS}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select Patient"
                  />
                  {errors.patientName && (
                    <Typography
                      textAlign={"start"}
                      sx={errorStyle}
                      variant="caption"
                    >
                      {errors.patientName?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Assigned To"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="assignedTo"
              control={control}
              render={({ field }) => (
                <>
                  <DropDownForText
                    options={ASSIGNED_TO_OPTIONS}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select Staff/Group"
                  />
                  {errors.assignedTo && (
                    <Typography
                      textAlign={"start"}
                      sx={errorStyle}
                      variant="caption"
                    >
                      {errors.assignedTo?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Task Date"
              color="neutral.60"
              isRequired
            />

            <Controller
              name="date"
              control={control}
              rules={{ required: "Date is required" }}
              render={({ field, fieldState }) => (
                <CustomDatePicker
                  value={field.value}
                  onDateChange={(val) => field.onChange(val)}
                  bgWhite={true}
                  hasError={!!fieldState.error}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Status"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <>
                  <DropDownForText
                    options={STATUS_OPTIONS}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select Status"
                  />
                  {errors.status && (
                    <Typography
                      textAlign={"start"}
                      sx={errorStyle}
                      variant="caption"
                    >
                      {errors.status?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Priority"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <>
                  <DropDownForText
                    options={PRIORITY_OPTIONS}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select Priority"
                  />
                  {errors.priority && (
                    <Typography
                      textAlign={"start"}
                      sx={errorStyle}
                      variant="caption"
                    >
                      {errors.priority?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 12 }}>
            <Controller
              name="reminder"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <CustomSingleCheckBox
                    checked={!!field.value}
                    handleChange={(e) => field.onChange(e.target.checked)}
                    label="Reminder"
                    sx={(theme) => ({ color: theme.palette.neutral[90] })}
                  />

                  {fieldState.error && (
                    <Typography
                      textAlign="start"
                      sx={errorStyle}
                      variant="caption"
                    >
                      {fieldState.error.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 12 }}>
            <Controller
              name="repeat"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <CustomSingleCheckBox
                    checked={!!field.value}
                    handleChange={(e) => field.onChange(e.target.checked)}
                    label="Repeat"
                    sx={(theme) => ({ color: theme.palette.neutral[90] })}
                  />

                  {fieldState.error && (
                    <Typography
                      textAlign={"start"}
                      sx={errorStyle}
                      variant="caption"
                    >
                      {fieldState.error.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>
        </Grid>

        <Box ref={footerRef} sx={stylesOfFooter}>
          <Grid container columnGap={1} justifyContent={"flex-end"}>
            <Grid>
              <Button
                onClick={handleDrawerClose}
                variant="outlined"
                type="button"
              >
                <Typography variant="body14PX500FW">Cancel</Typography>
              </Button>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  padding: "10px 16px",
                }}
              >
                <Typography variant="body14PX500FW">Save</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </DrawerBody>
  );
};

export default TaskForm;
