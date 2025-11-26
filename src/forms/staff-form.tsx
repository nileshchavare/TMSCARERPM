import { useRef } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { Box, Button, Grid, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomLabel from "../components/common-components/custom-label/custom-label";
import CustomInput from "../components/common-components/custom-input/custom-input";
import DropDownForText from "../components/common-components/drop-dwon-for-text/drop-down-for-text";
import DrawerBody from "../components/ui/DrawerBody";
import { stylesOfFooter } from "../components/ui/MainDrawer";
import {
  locationOptions,
  roleOptions,
} from "../features/admin/settings/constant";
import { addStaffSchema, type AddStaffFormValues } from "./validations/schema";
import { errorStyle } from "../components/common-components/custom-input/widgets/custom-input-styles";
import { STATUS_OPTIONS } from "../features/admin/clinics/constant";

const AddStaffForm = ({ onClose }: { onClose?: () => void }) => {
   const footerRef = useRef<HTMLDivElement>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddStaffFormValues>({
    resolver: yupResolver(addStaffSchema),
    defaultValues: {
      title: "",
      name: "",
      email: "",
      phoneNumber: "",
      role: "",
      location: "",
      status:'',
    },
  });

  const onSubmit: SubmitHandler<AddStaffFormValues> = (data) => {
    console.log("Staff Form Submitted:", data);
    reset();
    onClose?.();
  };
  
  const handleDrawerClose = () => {
    onClose?.();
  };

  return (
   <DrawerBody  padding="16px 20px" offset={footerRef?.current?.offsetHeight} gap={1}>
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={2} >
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomLabel variant="body5Medium" label="Title" color="neutral.60" isRequired />
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                placeholder="Enter Title"
                value={field.value ?? ""}
                bgWhite
                hasError={!!errors.title}
                errorMessage={errors.title?.message}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomLabel variant="body5Medium" label="Name" color="neutral.60" isRequired />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                placeholder="Enter Name"
                value={field.value ?? ""}
                bgWhite
                hasError={!!errors.name}
                errorMessage={errors.name?.message}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomLabel variant="body5Medium" label="Email" color="neutral.60" isRequired />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                placeholder="Enter Email"
                value={field.value ?? ""}
                bgWhite
                hasError={!!errors.email}
                errorMessage={errors.email?.message}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomLabel
            variant="body5Medium"
            label="Phone Number"
            color="neutral.60"
            isRequired
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                placeholder="Enter Phone Number"
                value={field.value ?? ""}
                bgWhite
                hasError={!!errors.phoneNumber}
                errorMessage={errors.phoneNumber?.message}
                isNumeric
                maxLength={10}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomLabel variant="body5Medium" label="Role" color="neutral.60" isRequired />
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <>
                <DropDownForText
                  options={roleOptions}
                  value={field.value ?? ""}
                  onChange={(e) => field.onChange(e.target.value)}
                  width="100%"
                  placeholder="Select Role"
                />
                {errors.role && (
                 <Typography textAlign={"start"} sx={errorStyle} variant="caption">
                    {errors.role?.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomLabel
            variant="body5Medium"
            label="Location"
            color="neutral.60"
            isRequired
          />
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <>
                <DropDownForText
                  options={locationOptions}
                  value={field.value ?? ""}
                  onChange={(e) => field.onChange(e.target.value)}
                  width="100%"
                  placeholder="Select Location"
                />
                {errors.location && (
                  <Typography textAlign={"start"} sx={errorStyle} variant="caption">
                    {errors.location?.message}
                  </Typography>
                )}
              </>
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
                    <Typography textAlign={"start"} sx={errorStyle} variant="caption">
                      {errors.status?.message}
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
            <Grid >
              <Button
                variant="contained"
                type="submit"
                sx={
                  {
                    padding: '10px 16px'
                  }
                }
              >
                <Typography variant="body14PX500FW" >Save</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
    </form>
    </DrawerBody>
  );
};

export default AddStaffForm;
