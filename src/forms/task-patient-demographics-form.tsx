import {
  Controller,
  useForm,
  useWatch,
  type SubmitHandler,
} from "react-hook-form";
import DrawerBody from "../components/ui/DrawerBody";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLayoutEffect, useRef, useState } from "react";
import {
  taskPatientDemographicsSchema,
  type TaskPatientDemographicsFormValues,
} from "./validations/schema";
import { Box, Button, Grid, Typography } from "@mui/material";
import { stylesOfFooter } from "../components/ui/MainDrawer";
import CustomLabel from "../components/common-components/custom-label/custom-label";
import DropDownForText from "../components/common-components/drop-dwon-for-text/drop-down-for-text";
import CustomInput from "../components/common-components/custom-input/custom-input";
import {
  ASSIGNED_TO_OPTIONS,
  PRIORITY_OPTIONS,
  REPEAT_FREQUENCY_OPTIONS,
} from "../features/admin/Tasks/constant";
import { errorStyle } from "../components/common-components/custom-input/widgets/custom-input-styles";
import CustomDatePicker from "../components/common-components/date-picker-field/date-picker-field";
import CustomSingleCheckBox from "../components/common-components/custom-checkbox/single-checkbox";

const TaskPatientDemographicsForm = ({
  onClose,
  isEdit = false,
}: {
  onClose?: () => void;
  isEdit?: boolean;
}) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, []);

  const defaultValues = {
    taskName: "",
    assignee: "",
    date: "",
    priority: "",
    repeat: false,
    repeatDays: "",
    repeatFrequency: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskPatientDemographicsFormValues>({
    resolver: yupResolver(taskPatientDemographicsSchema),
    defaultValues,
  });

  const watchRepeatValue = useWatch({
    control,
    name: "repeat",
  });

  const onSubmit: SubmitHandler<TaskPatientDemographicsFormValues> = () => {
    onClose?.();
  };

  const handleDrawerClose = () => {
    onClose?.();
  };
  return (
    <DrawerBody padding="16px 20px" offset={footerHeight} gap={1}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Task Name"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="taskName"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  placeholder="Enter Task Name"
                  value={field.value ?? ""}
                  bgWhite
                  hasError={!!errors.taskName}
                  errorMessage={errors.taskName?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Assignee"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="assignee"
              control={control}
              render={({ field }) => (
                <>
                  <DropDownForText
                    options={ASSIGNED_TO_OPTIONS}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select Assignee"
                  />
                  {errors.assignee && (
                    <Typography
                      textAlign={"start"}
                      sx={errorStyle}
                      variant="caption"
                    >
                      {errors.assignee?.message}
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
              render={({ field }) => (
                <>
                  <CustomDatePicker
                    value={field.value}
                    onDateChange={(val) => field.onChange(val)}
                    bgWhite={true}
                  />
                  {errors.date && (
                    <Typography
                      textAlign={"start"}
                      sx={errorStyle}
                      variant="caption"
                    >
                      {errors.date?.message}
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
                    checked={field.value ?? false}
                    handleChange={(e) => {
                      field.onChange(e.target.checked);
                    }}
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
          {watchRepeatValue === true && (
            <Grid container columnSpacing={2} size={{ xs: 12, md: 12 }}>
              <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                  name="repeatFrequency"
                  control={control}
                  render={({ field }) => (
                    <>
                      <DropDownForText
                        options={REPEAT_FREQUENCY_OPTIONS}
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        width="100%"
                        placeholder="Select"
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Controller
                  name="repeatFrequency"
                  control={control}
                  render={({ field }) => (
                    <>
                      <DropDownForText
                        options={REPEAT_FREQUENCY_OPTIONS}
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        width="100%"
                        placeholder="Select"
                      />
                    </>
                  )}
                />
              </Grid>
            </Grid>
          )}
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
                <Typography variant="body14PX500FW">
                  {isEdit ? "Update" : "Save"}
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </DrawerBody>
  );
};
export default TaskPatientDemographicsForm;
