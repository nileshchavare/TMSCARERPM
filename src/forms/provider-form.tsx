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
import { roleOptions } from "../features/admin/settings/constant";
import CustomDatePicker from "../components/common-components/date-picker-field/date-picker-field";


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
      role: "",
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
    <DrawerBody  padding="16px 20px" offset={footerRef?.current?.offsetHeight} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid size={12}>
              <Typography variant="body14PX500FW" color="neutral.80" sx={{ display:'block'}}>
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
                    placeholder="Enter First Name"
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
                    placeholder="Enter Last Name"
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
                    placeholder="Enter NPI Number"
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
                    placeholder="Enter Email"
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
                    placeholder="Enter Phone Number"
                    hasError={!!errors.phoneNumber}
                    errorMessage={errors.phoneNumber?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel label="Role" variant="body5Medium" color="neutral.60" isRequired />
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <>
                    <DropDownForText
                      options={roleOptions}
                      value={field.value}
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

            <Grid size={12}><Divider sx={{ my: "16px" }} /></Grid>

            <Grid size={12}>
              <Typography variant="body14PX500FW" color="neutral.80" sx={{ display:'block'}}>License State</Typography>
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
                    placeholder="Enter License Number"
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
                  // <CustomInput
                  //   {...field}
                  //   bgWhite
                  //   placeholder="YYYY-MM-DD"
                  //   hasError={!!errors.expiryDate}
                  //   errorMessage={errors.expiryDate?.message}
                  // />
                  <CustomDatePicker {...field} value={field.value ?? ''} onDateChange={field.onChange} bgWhite/>
                )}
              />
            </Grid>

            <Grid size={12}><Divider sx={{ my: "16px" }} /></Grid>

            <Grid size={12}>
               <Typography variant="body14PX500FW" color="neutral.80" sx={{ display:'block'}}>Physical Address</Typography>
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
                    placeholder="Enter Address Line 1"
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
                  <CustomInput {...field} value={field.value ?? ""} bgWhite placeholder="Enter Address Line 2" />
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
                    placeholder="Enter City"
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
                    placeholder="Enter ZIP Code"
                    hasError={!!errors.physicalAddress?.zipCode}
                    errorMessage={errors.physicalAddress?.zipCode?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={12}><Divider sx={{ my: "16px" }} /></Grid>

            <Grid size={12}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="body14PX500FW" color="neutral.80" sx={{ display:'block'}}>Billing Address</Typography>           
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
                    placeholder="Enter Address Line 1"
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
                    placeholder="Enter Address Line 2"
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
                    placeholder="Enter City"
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
                    placeholder="Enter ZIP Code"
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
