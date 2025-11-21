import { useForm, Controller } from "react-hook-form";
import { Box, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
// import DrawerFooterButtons from "../components/ui/DrawerFooter";
import { type AddStaffFormValues } from "../features/admin/settings/types/type";
import {
  addStaffSchema,
  locationOptions,
  roleOptions,
} from "../features/admin/settings/constant";
import CustomLabel from "../components/common-components/custom-label/custom-label";
import CustomInput from "../components/common-components/custom-input/custom-input";
import DropDownForText from "../components/common-components/drop-dwon-for-text/drop-down-for-text";

const AddStaffForm = ({ onClose }: { onClose?: () => void }) => {
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
    },
  });

  const handleCancel = () => {
    reset();
    onClose?.();
  };

  const onSubmit = (data: AddStaffFormValues) => {
    console.log("Staff Form Submitted:", data);

    onClose?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomLabel variant="body5Medium" label="Title" color="neutral.60" />
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                placeholder="Title"
                name={field.name}
                value={field.value ?? ""}
                onChange={(e) => field.onChange(e)}
                hasError={!!errors.title}
                errorMessage={errors.title?.message as string | undefined}
              />
            )}
          />
        </Grid>

        {/* Name */}
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomLabel variant="body5Medium" label="Name" color="neutral.60" />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                placeholder="Full name"
                name={field.name}
                value={field.value ?? ""}
                onChange={(e) => field.onChange(e)}
                hasError={!!errors.name}
                errorMessage={errors.name?.message as string | undefined}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomLabel variant="body5Medium" label="Email" color="neutral.60" />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                placeholder="Email"
                name={field.name}
                value={field.value ?? ""}
                onChange={(e) => field.onChange(e)}
                hasError={!!errors.email}
                errorMessage={errors.email?.message as string | undefined}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomLabel
            variant="body5Medium"
            label="Phone Number"
            color="neutral.60"
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                placeholder="Phone Number (10 digits)"
                name={field.name}
                value={field.value ?? ""}
                onChange={(e) => field.onChange(e)}
                hasError={!!errors.phoneNumber}
                errorMessage={errors.phoneNumber?.message as string | undefined}
                isNumeric
                maxLength={10}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomLabel variant="body5Medium" label="Role" color="neutral.60" />
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <DropDownForText
                options={roleOptions}
                value={field.value ?? ""}
                onChange={(e) => field.onChange(e)}
                width="100%"
                placeholder="Select role"
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomLabel
            variant="body5Medium"
            label="Location"
            color="neutral.60"
          />
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <DropDownForText
                options={locationOptions}
                value={field.value ?? ""}
                onChange={(e) => field.onChange(e)}
                width="100%"
                placeholder="Select location"
              />
            )}
          />
        </Grid>
      </Grid>

      <Box sx={{ p: 2 }}>
        {/* <DrawerFooterButtons

          onCancel={handleCancel}
          onSave={handleSubmit(onSubmit)}

        /> */}
      </Box>
    </form>
  );
};

export default AddStaffForm;
