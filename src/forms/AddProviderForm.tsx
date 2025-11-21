import React, { useEffect } from "react";
import { Box, Divider, Grid, Checkbox } from "@mui/material";
import { useForm, Controller, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// import DrawerFooterButtons from "../components/ui/DrawerFooter";
import CustomLabel from "../components/common-components/custom-label/custom-label";
import CustomInput from "../components/common-components/custom-input/custom-input";
import DropDownForText from "../components/common-components/drop-dwon-for-text/drop-down-for-text";

import { type AddProviderFormValues } from "../features/admin/settings/types/type";
import { providerSchema } from "../features/admin/settings/constant";

const locationOptions = [
  { key: "ny", value: "New York" },
  { key: "la", value: "Los Angeles" },
  { key: "tx", value: "Texas" },
];

const stateOptions = [
  { key: "ny", value: "New York" },
  { key: "ca", value: "California" },
  { key: "tx", value: "Texas" },
];

const AddProviderForm = ({ onClose }: { onClose?: () => void }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AddProviderFormValues>({
    resolver: yupResolver(providerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      npiNumber: "",
      email: "",
      phoneNumber: "",
      location: "",

      licenseState: "",
      licenseNumber: "",
      expiryDate: "",

      physicalAddress1: "",
      physicalAddress2: "",
      physicalState: "",
      physicalCity: "",
      physicalZip: "",

      billingSameAsPhysical: false,
      billingAddress1: "",
      billingAddress2: "",
      billingState: "",
      billingCity: "",
      billingZip: "",
    },
  });

  const billingSameAsPhysical = useWatch({
    control,
    name: "billingSameAsPhysical",
  });

  useEffect(() => {
    if (billingSameAsPhysical) {
      setValue("billingAddress1", control._formValues.physicalAddress1);
      setValue("billingAddress2", control._formValues.physicalAddress2);
      setValue("billingState", control._formValues.physicalState);
      setValue("billingCity", control._formValues.physicalCity);
      setValue("billingZip", control._formValues.physicalZip);
    }
  }, [billingSameAsPhysical]);

  const onSubmit = (data: AddProviderFormValues) => {
    console.log("Provider Submitted:", data);
    onClose?.();
  };

  return (
    <Box sx={{ height: "100%", position: "relative" }}>
      <Box
        sx={{
          height: "100%",
          overflowY: "auto",
          pb: 9,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1} sx={{ p: 2 }}>
            <Grid size={12}>
              <CustomLabel
                variant="body14PX500FW"
                label="Demographic"
                color="neutral.80"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="First Name"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="First Name"
                    value={field.value}
                    hasError={!!errors.firstName}
                    errorMessage={errors.firstName?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="Last Name"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="Last Name"
                    value={field.value}
                    hasError={!!errors.lastName}
                    errorMessage={errors.lastName?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="NPI Number"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="npiNumber"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    isNumeric
                    maxLength={10}
                    placeholder="NPI Number"
                    value={field.value}
                    hasError={!!errors.npiNumber}
                    errorMessage={errors.npiNumber?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="Email"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="Email"
                    value={field.value}
                    hasStartMailIcon
                    hasError={!!errors.email}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="Phone Number"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    isNumeric
                    maxLength={10}
                    placeholder="Phone Number"
                    value={field.value}
                    hasError={!!errors.phoneNumber}
                    errorMessage={errors.phoneNumber?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="Location"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <DropDownForText
                    options={locationOptions}
                    value={field.value}
                    onChange={field.onChange}
                    width="100%"
                    placeholder="Select Location"
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: "20px", color: "neutral.5" }} />
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt: "0px !important" }}>
              <CustomLabel
                variant="body14PX500FW"
                label="License State"
                color="neutral.80"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="State"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="licenseState"
                control={control}
                render={({ field }) => (
                  <DropDownForText
                    options={stateOptions}
                    value={field.value}
                    onChange={field.onChange}
                    width="100%"
                    placeholder="Select State"
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="License Number"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="licenseNumber"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="License Number"
                    hasError={!!errors.licenseNumber}
                    errorMessage={errors.licenseNumber?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="Expiry Date"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="expiryDate"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="YYYY-MM-DD"
                    hasError={!!errors.expiryDate}
                    errorMessage={errors.expiryDate?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: "20px", color: "neutral.5" }} />
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt: "0px !important" }}>
              <CustomLabel
                variant="body14PX500FW"
                label="Physical Address"
                color="neutral.80"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="Address Line 1"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="physicalAddress1"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="Address Line 1"
                    hasError={!!errors.physicalAddress1}
                    errorMessage={errors.physicalAddress1?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="Address Line 2"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="physicalAddress2"
                control={control}
                render={({ field }) => (
                  <CustomInput {...field} placeholder="Address Line 2" />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel
                label="State"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="physicalState"
                control={control}
                render={({ field }) => (
                  <DropDownForText
                    options={stateOptions}
                    value={field.value}
                    onChange={field.onChange}
                    width="100%"
                    placeholder="Select State"
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel
                label="City"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="physicalCity"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="City"
                    hasError={!!errors.physicalCity}
                    errorMessage={errors.physicalCity?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel
                label="ZIP"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="physicalZip"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    isNumeric
                    maxLength={5}
                    placeholder="ZIP Code"
                    hasError={!!errors.physicalZip}
                    errorMessage={errors.physicalZip?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: "20px", color: "neutral.5" }} />
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt: "0px !important" }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <CustomLabel
                  variant="body14PX500FW"
                  label="Billing Address"
                  color="neutral.80"
                />
                <Controller
                  name="billingSameAsPhysical"
                  control={control}
                  render={({ field }) => (
                    <Box display="flex" alignItems="center" gap={1}>
                      <Checkbox
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                      <CustomLabel label="Same as Physical" />
                    </Box>
                  )}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="Address Line 1"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="billingAddress1"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="Address Line 1"
                    hasError={!!errors.billingAddress1}
                    errorMessage={errors.billingAddress1?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel
                label="Address Line 2"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="billingAddress2"
                control={control}
                render={({ field }) => (
                  <CustomInput {...field} placeholder="Address Line 2" />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel
                label="State"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="billingState"
                control={control}
                render={({ field }) => (
                  <DropDownForText
                    options={stateOptions}
                    value={field.value}
                    onChange={field.onChange}
                    width="100%"
                    placeholder="Select State"
                    disableField={billingSameAsPhysical}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel
                label="City"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="billingCity"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="City"
                    hasError={!!errors.billingCity}
                    errorMessage={errors.billingCity?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel
                label="ZIP"
                variant="body5Medium"
                color="neutral.60"
              />
              <Controller
                name="billingZip"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    isNumeric
                    maxLength={5}
                    placeholder="ZIP Code"
                    hasError={!!errors.billingZip}
                    errorMessage={errors.billingZip?.message}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Box sx={{ p: 2 }}>
            {/* <DrawerFooterButtons
        //   isLoading={isSubmitting}
          onCancel={onClose}
          onSave={handleSubmit(onSubmit)}
        //   saveLabel="Add Provider"
        /> */}
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddProviderForm;
