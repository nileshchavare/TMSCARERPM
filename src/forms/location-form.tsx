import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Controller,
  useForm,
  useWatch,
  type SubmitHandler,
} from "react-hook-form";
import CustomInput from "../components/common-components/custom-input/custom-input";
import CustomLabel from "../components/common-components/custom-label/custom-label";
import CustomSingleCheckBox from "../components/common-components/custom-checkbox/single-checkbox";
import DropDownForText from "../components/common-components/drop-dwon-for-text/drop-down-for-text";
import DrawerBody from "../components/ui/DrawerBody";
import { stylesOfFooter } from "../components/ui/MainDrawer";
import { US_STATES } from "../features/admin/clinics/constant";
import {
  addLocationSchema,
  type AddLocationFormValues,
} from "./validations/schema";
import { errorStyle } from "../components/common-components/custom-input/widgets/custom-input-styles";

const AddLocationForm = ({ onClose }: { onClose?: () => void }) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [billingSameAsPhysical, setBillingSameAsPhysical] = useState(false);
  const defaultValues: AddLocationFormValues = {
    locationName: "",
    phoneNumber: "",
    email: "",
    npiNumber: "",
    taxNumber: "",
    tinEin: "",
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
  const {
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<AddLocationFormValues>({
    defaultValues,
    resolver: yupResolver(addLocationSchema),
  });

  const physicalAddr = useWatch({
    control,
    name: "physicalAddress",
  });

  useLayoutEffect(() => {
    if (footerRef.current) {
      setOffset(footerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (billingSameAsPhysical) {
      setValue("billingAddress", { ...physicalAddr });
    }
  }, [billingSameAsPhysical, physicalAddr, setValue]);

  const handleDrawerClose = () => {
    onClose?.();
  };
  const onSubmit: SubmitHandler<AddLocationFormValues> = () => {
    reset(defaultValues);
    onClose?.();
  };
  return (
    <DrawerBody padding="16px 20px" offset={offset} gap={1}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Location Name"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="locationName"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter Location Name"
                  bgWhite
                  hasError={!!errors.locationName}
                  errorMessage={errors.locationName?.message}
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
                  value={field.value ?? ""}
                  placeholder="Enter Phone Number"
                  bgWhite
                  isNumeric
                  hasError={!!errors.phoneNumber}
                  errorMessage={errors.phoneNumber?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Email Id"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter Email"
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
              label="NPI Number"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="npiNumber"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter NPI Number"
                  bgWhite
                  isNumeric
                  hasError={!!errors.npiNumber}
                  errorMessage={errors.npiNumber?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Tax Number"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="taxNumber"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter Tax Number"
                  bgWhite
                  hasError={!!errors.taxNumber}
                  errorMessage={errors.taxNumber?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="TIN/EIN"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="tinEin"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter TIN/EIN"
                  bgWhite
                  hasError={!!errors.tinEin}
                  errorMessage={errors.tinEin?.message}
                />
              )}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: "20px", color: "neutral.5" }} />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography
            variant="body14PX500FW"
            color="neutral.80"
            sx={{ display: "block" }}
          >
            Physical Address
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Address Line 1"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="physicalAddress.addressLine1"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter Address Line 1"
                  bgWhite
                  hasError={!!errors.physicalAddress?.addressLine1}
                  errorMessage={errors.physicalAddress?.addressLine1?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Address Line 2"
              color="neutral.60"
            />
            <Controller
              name="physicalAddress.addressLine2"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter Address Line 2"
                  bgWhite
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel
              variant="body5Medium"
              label="State"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="physicalAddress.state"
              control={control}
              render={({ field }) => (
                <>
                  <DropDownForText
                    options={US_STATES}
                    value={field.value ?? ""}
                    placeholder="Select State"
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                  />
                  {errors.physicalAddress?.state && (
                    <Typography
                      textAlign={"start"}
                      sx={errorStyle}
                      variant="caption"
                    >
                      {errors.physicalAddress?.state?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel
              variant="body5Medium"
              label="City"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="physicalAddress.city"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter City"
                  bgWhite
                  hasError={!!errors.physicalAddress?.city}
                  errorMessage={errors.physicalAddress?.city?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel
              variant="body5Medium"
              label="Zip Code"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="physicalAddress.zipCode"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter Zip Code"
                  bgWhite
                  isNumeric
                  hasError={!!errors.physicalAddress?.zipCode}
                  errorMessage={errors.physicalAddress?.zipCode?.message}
                />
              )}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: "20px", color: "neutral.5" }} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body14PX500FW" color="neutral.80">
            Billing Address
          </Typography>
          <CustomSingleCheckBox
            checked={billingSameAsPhysical}
            handleChange={() =>
              setBillingSameAsPhysical(!billingSameAsPhysical)
            }
            label="Same as Physical Address"
          />
        </Box>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Address Line 1"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="billingAddress.addressLine1"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter Address Line 1"
                  bgWhite
                  disableField={billingSameAsPhysical}
                  hasError={!!errors.billingAddress?.addressLine1}
                  errorMessage={errors.billingAddress?.addressLine1?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel
              variant="body5Medium"
              label="Address Line 2"
              color="neutral.60"
            />
            <Controller
              name="billingAddress.addressLine2"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter Address Line 2"
                  bgWhite
                  disableField={billingSameAsPhysical}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel
              variant="body5Medium"
              label="State"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="billingAddress.state"
              control={control}
              render={({ field }) => (
                <>
                  <DropDownForText
                    options={US_STATES}
                    value={field.value ?? ""}
                    placeholder="Select State"
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    disableField={billingSameAsPhysical}
                  />
                  {errors.billingAddress?.state && (
                    <Typography
                      textAlign={"start"}
                      sx={errorStyle}
                      variant="caption"
                    >
                      {errors.billingAddress?.state?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel
              variant="body5Medium"
              label="City"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="billingAddress.city"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter City"
                  bgWhite
                  disableField={billingSameAsPhysical}
                  hasError={!!errors.billingAddress?.city}
                  errorMessage={errors.billingAddress?.city?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel
              variant="body5Medium"
              label="Zip Code"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="billingAddress.zipCode"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter Zip Code"
                  bgWhite
                  isNumeric
                  disableField={billingSameAsPhysical}
                  hasError={!!errors.billingAddress?.zipCode}
                  errorMessage={errors.billingAddress?.zipCode?.message}
                />
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

export default AddLocationForm;
