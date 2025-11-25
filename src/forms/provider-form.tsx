import { useEffect, useRef, useState } from "react";
import { Box, Divider, Grid, Button, Typography } from "@mui/material";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import CustomLabel from "../components/common-components/custom-label/custom-label";
import CustomInput from "../components/common-components/custom-input/custom-input";
import DropDownForText from "../components/common-components/drop-dwon-for-text/drop-down-for-text";
import CustomSingleCheckBox from "../components/common-components/custom-checkbox/single-checkbox";
import DrawerBody from "../components/ui/DrawerBody";
import { stylesOfFooter } from "../components/ui/MainDrawer";
import { providerSchema, type AddProviderFormValues } from "./validations/schema";
import { errorStyle } from "../components/common-components/custom-input/widgets/custom-input-styles";

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
  const footerRef = useRef<HTMLDivElement>(null);
  const [sameAsPhysical, setSameAsPhysical] = useState(false);

  const defaultValues: AddProviderFormValues = {
      firstName: "",
      lastName: "",
      npiNumber: "",
      email: "",
      phoneNumber: "",
      location: "",
      licenseState: "",
      licenseNumber: "",
      expiryDate: "",
      physicalAddress: {
      addressLine1: "",
      addressLine2: "",
      state: "",
      city: "",
      zipCode: "",
      },
      billingAddress: {
        addressLine1: "",
        addressLine2: "",
        state: "",
        city: "",
        zipCode: "",
    },
  };

  const { control, handleSubmit, setValue, watch, formState: { errors } } =
    useForm<AddProviderFormValues>({
      resolver: yupResolver(providerSchema),
      defaultValues,
    });

  const physicalAddr = watch("physicalAddress");

  useEffect(() => {
    if (sameAsPhysical) {
      setValue("billingAddress", { ...physicalAddr });
    }
  }, [sameAsPhysical, physicalAddr, setValue]);

  const onSubmit: SubmitHandler<AddProviderFormValues> = (data) => {
    console.log("Provider Submitted:", data);
    onClose?.();
  };

  return (
    <DrawerBody padding={3} offset={footerRef?.current?.offsetHeight}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid size={12}>
              <Typography variant="body14PX500FW" color="neutral.80" sx={{ mb: 1.5 ,display:'block'}}>
              Demographic
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel label="First Name" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="First Name"
                    bgWhite
                    hasError={!!errors.firstName}
                    errorMessage={errors.firstName?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel label="Last Name" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="Last Name"
                    bgWhite
                    hasError={!!errors.lastName}
                    errorMessage={errors.lastName?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel label="NPI Number" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="npiNumber"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    bgWhite
                    isNumeric
                    maxLength={10}
                    placeholder="NPI Number"
                    hasError={!!errors.npiNumber}
                    errorMessage={errors.npiNumber?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel label="Email" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    bgWhite
                    placeholder="Email"
                    hasStartMailIcon
                    hasError={!!errors.email}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel label="Phone Number" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    bgWhite
                    isNumeric
                    maxLength={10}
                    placeholder="Phone Number"
                    hasError={!!errors.phoneNumber}
                    errorMessage={errors.phoneNumber?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel label="Location" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <>
                    <DropDownForText
                      options={locationOptions}
                      value={field.value}
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

            <Grid size={12}><Divider sx={{ my: "20px" }} /></Grid>

            <Grid size={12}>
              <CustomLabel variant="body14PX500FW" label="License State" color="neutral.80" />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel label="State" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="licenseState"
                control={control}
                render={({ field }) => (
                  <>
                    <DropDownForText
                      options={stateOptions}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      width="100%"
                      placeholder="Select State"
                    />
                    {errors.licenseState && (
                     <Typography textAlign={"start"} sx={errorStyle} variant="caption">
                        {errors.licenseState?.message}
                      </Typography>
                    )}
                  </>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel label="License Number" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="licenseNumber"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    bgWhite
                    placeholder="License Number"
                    hasError={!!errors.licenseNumber}
                    errorMessage={errors.licenseNumber?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel label="Expiry Date" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="expiryDate"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    bgWhite
                    placeholder="YYYY-MM-DD"
                    hasError={!!errors.expiryDate}
                    errorMessage={errors.expiryDate?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={12}><Divider sx={{ my: "20px" }} /></Grid>

            <Grid size={12}>
              <CustomLabel variant="body14PX500FW" label="Physical Address" color="neutral.80" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel label="Address Line 1" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="physicalAddress.addressLine1"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    value={field.value ?? ""}
                    bgWhite
                    placeholder="Address Line 1"
                    hasError={!!errors.physicalAddress?.addressLine1}
                    errorMessage={errors.physicalAddress?.addressLine1?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel label="Address Line 2" variant="body5Medium" color="neutral.60" />
              <Controller
                name="physicalAddress.addressLine2"
                control={control}
                render={({ field }) => (
                  <CustomInput {...field} value={field.value ?? ""} bgWhite placeholder="Address Line 2" />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel label="State" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="physicalAddress.state"
                control={control}
                render={({ field }) => (
                  <>
                    <DropDownForText
                      options={stateOptions}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      width="100%"
                      placeholder="Select State"
                    />
                    {errors.physicalAddress?.state && (
                      <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>
                        {errors.physicalAddress?.state?.message}
                      </Typography>
                    )}
                  </>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel label="City" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="physicalAddress.city"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    value={field.value ?? ""}
                    bgWhite
                    placeholder="City"
                    hasError={!!errors.physicalAddress?.city}
                    errorMessage={errors.physicalAddress?.city?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel label="ZIP" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="physicalAddress.zipCode"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    value={field.value ?? ""}
                    bgWhite
                    isNumeric
                    maxLength={5}
                    placeholder="ZIP Code"
                    hasError={!!errors.physicalAddress?.zipCode}
                    errorMessage={errors.physicalAddress?.zipCode?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={12}><Divider sx={{ my: "20px" }} /></Grid>

            <Grid size={12}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <CustomLabel variant="body14PX500FW" label="Billing Address" color="neutral.80" />              
                <Box display="flex" alignItems="center" gap={1}>
                  <CustomSingleCheckBox checked={sameAsPhysical} handleChange={() => setSameAsPhysical(!sameAsPhysical)} />
                  <CustomLabel label="Same as Physical" />
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel label="Address Line 1" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="billingAddress.addressLine1"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    value={field.value ?? ""}
                    bgWhite
                    placeholder="Address Line 1"
                    disableField={sameAsPhysical}
                    hasError={!!errors.billingAddress?.addressLine1}
                    errorMessage={errors.billingAddress?.addressLine1?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel label="Address Line 2" variant="body5Medium" color="neutral.60" />
              <Controller
                name="billingAddress.addressLine2"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    value={field.value ?? ""}
                    bgWhite
                    placeholder="Address Line 2"
                    disableField={sameAsPhysical}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel label="State" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="billingAddress.state"
                control={control}
                render={({ field }) => (
                  <>
                    <DropDownForText
                      options={stateOptions}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      width="100%"
                      disableField={sameAsPhysical}
                      placeholder="Select State"
                    />
                    {errors.billingAddress?.state && (
                      <Typography textAlign={"start"} sx={errorStyle} variant="caption">
                        {errors.billingAddress?.state?.message}
                      </Typography>
                    )}
                  </>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel label="City" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="billingAddress.city"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    value={field.value ?? ""}
                    bgWhite
                    placeholder="City"
                    disableField={sameAsPhysical}
                    hasError={!!errors.billingAddress?.city}
                    errorMessage={errors.billingAddress?.city?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel label="ZIP" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="billingAddress.zipCode"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    value={field.value ?? ""}
                    bgWhite
                    isNumeric
                    maxLength={5}
                    placeholder="ZIP Code"
                    disableField={sameAsPhysical}
                    hasError={!!errors.billingAddress?.zipCode}
                    errorMessage={errors.billingAddress?.zipCode?.message}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Box ref={footerRef} sx={stylesOfFooter}>
            <Grid container columnGap={1} justifyContent="flex-end">
              <Grid>
                <Button variant="outlined" type="button" onClick={onClose}>
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
  );
};

export default AddProviderForm;
