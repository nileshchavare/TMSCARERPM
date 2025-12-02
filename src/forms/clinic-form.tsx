import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Controller,
  useFieldArray,
  useForm,
  useWatch,
  type SubmitHandler,
} from "react-hook-form";
import CustomSingleCheckBox from "../components/common-components/custom-checkbox/single-checkbox";
import CustomInput from "../components/common-components/custom-input/custom-input";
import CustomLabel from "../components/common-components/custom-label/custom-label";
import DropDownForText from "../components/common-components/drop-dwon-for-text/drop-down-for-text";
import CustomRadioButton from "../components/common-components/radio-button/radio-button";
import DrawerBody from "../components/ui/DrawerBody";
import { stylesOfFooter } from "../components/ui/MainDrawer";
import {
  SPECIALTY_OPTIONS,
  STATUS_OPTIONS,
  US_STATES,
} from "../features/admin/clinics/constant";
import {
  newClinicSchema,
  type NewClinicFormValues,
} from "./validations/schema";
import { errorStyle } from "../components/common-components/custom-input/widgets/custom-input-styles";

const initialContactId = `${Date.now()}`;

const AddClinicForm: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [billingSameAsPhysical, setBillingSameAsPhysical] = useState(false);

  const defaultValues: NewClinicFormValues = {
    rpmBillingScheme: "",
    useTpsCdces: "",
    useTpsBilling: "",
    rpmBilling: "",
    clinicName: "",
    groupNpiNumber: "",
    phoneNumber: "",
    email: "",
    fax: "",
    taxNumber: "",
    tinEin: "",
    specialty: "",
    status: "",
    primaryContacts: [{ id: initialContactId, name: "", email: "", phone: "" }],
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
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<NewClinicFormValues>({
    defaultValues,
    resolver: yupResolver(newClinicSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "primaryContacts",
    keyName: "keyId",
  });

  const physicalAddr = useWatch({
    control,
    name: "physicalAddress",
  });

  useEffect(() => {
    if (billingSameAsPhysical) {
      setValue("billingAddress", { ...physicalAddr });
    } else {
      setValue("billingAddress", {
        addressLine1: "",
        addressLine2: "",
        state: "",
        city: "",
        zipCode: "",
      });
    }
  }, [billingSameAsPhysical, setValue]);

  useLayoutEffect(() => {
    if (footerRef.current) {
      setOffset(footerRef.current.offsetHeight);
    }
  }, []);

  const handleAddPrimaryContact = () =>
    append({ id: `${Date.now()}`, name: "", email: "", phone: "" });

  const handleRemovePrimaryContact = (index: number) => {
    if (fields.length > 1) remove(index);
  };

  const onSubmit: SubmitHandler<NewClinicFormValues> = async () => {
    reset(defaultValues);
    onClose?.();
  };

  const handleDrawerClose = () => {
    onClose?.();
  };

  return (
    <DrawerBody padding="16px 20px" offset={offset} gap={1}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="body14PX500FW"
          color="neutral.80"
          sx={{ mb: 1.5, display: "block" }}
        >
          Demographics
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel
              variant="body5Medium"
              label="Clinic Name"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="clinicName"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter Clinic Name"
                  bgWhite
                  hasError={!!errors.clinicName}
                  errorMessage={errors.clinicName?.message as string}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel
              variant="body5Medium"
              label="Group NPI Number"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="groupNpiNumber"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter Group NPI Number"
                  bgWhite
                  hasError={!!errors.groupNpiNumber}
                  errorMessage={errors.groupNpiNumber?.message as string}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
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
                  value={field.value ?? ""}
                  placeholder="Enter Phone Number"
                  bgWhite
                  hasError={!!errors.phoneNumber}
                  errorMessage={errors.phoneNumber?.message as string}
                  isNumeric
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel
              variant="body5Medium"
              label="Email"
              color="neutral.60"
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
                  errorMessage={errors.email?.message as string}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel variant="body5Medium" label="Fax" color="neutral.60" />
            <Controller
              name="fax"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter Fax"
                  bgWhite
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel
              variant="body5Medium"
              label="Tax Number"
              color="neutral.60"
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
                  errorMessage={errors.taxNumber?.message as string}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel
              variant="body5Medium"
              label="TIN/EIN"
              color="neutral.60"
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
                  errorMessage={errors.tinEin?.message as string}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <CustomLabel
              variant="body5Medium"
              label="Specialty"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="specialty"
              control={control}
              render={({ field }) => (
                <>
                  <DropDownForText
                    value={field.value ?? ""}
                    options={SPECIALTY_OPTIONS}
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select Specialty"
                  />
                  {errors.specialty && (
                    <Typography
                      textAlign={"start"}
                      sx={errorStyle}
                      variant="caption"
                    >
                      {errors.specialty?.message as string}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
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
                    value={field.value ?? ""}
                    options={STATUS_OPTIONS}
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
                      {errors.status?.message as string}
                    </Typography>
                  )}
                </>
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
            sx={{ mb: 1.5, display: "block" }}
          >
            Primary Contact
          </Typography>
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            sx={(theme) => ({
              backgroundColor: theme.palette.primary[10],
              padding: "4px 10px",
            })}
            onClick={handleAddPrimaryContact}
          >
            Add
          </Button>
        </Box>

        <Grid container spacing={2} display={"flex"} alignItems={"end"}>
          {fields.map((item, index) => (
            <React.Fragment key={item.id}>
              <Grid size={{ xs: 12, md: 4 }}>
                {index === 0 && (
                  <CustomLabel
                    variant="body5Medium"
                    label="Name"
                    color="neutral.60"
                    isRequired
                  />
                )}
                <Controller
                  name={`primaryContacts.${index}.name`}
                  control={control}
                  render={({ field }) => (
                    <CustomInput
                      {...field}
                      value={field.value ?? ""}
                      placeholder="Enter Name"
                      bgWhite
                      hasError={!!errors.primaryContacts?.[index]?.name}
                      errorMessage={
                        errors.primaryContacts?.[index]?.name?.message
                      }
                    />
                  )}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                {index === 0 && (
                  <CustomLabel
                    variant="body5Medium"
                    label="Email"
                    color="neutral.60"
                    isRequired
                  />
                )}
                <Controller
                  name={`primaryContacts.${index}.email`}
                  control={control}
                  render={({ field }) => (
                    <CustomInput
                      {...field}
                      value={field.value ?? ""}
                      placeholder="Enter Email"
                      bgWhite
                      hasError={!!errors.primaryContacts?.[index]?.email}
                      errorMessage={
                        errors.primaryContacts?.[index]?.email?.message
                      }
                    />
                  )}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 3 }}>
                {index === 0 && (
                  <CustomLabel
                    variant="body5Medium"
                    label="Phone Number"
                    color="neutral.60"
                    isRequired
                  />
                )}
                <Controller
                  name={`primaryContacts.${index}.phone`}
                  control={control}
                  render={({ field }) => (
                    <CustomInput
                      {...field}
                      value={field.value ?? ""}
                      placeholder="Enter Phone Number"
                      bgWhite
                      isNumeric
                      hasError={!!errors.primaryContacts?.[index]?.phone}
                      errorMessage={
                        errors.primaryContacts?.[index]?.phone?.message
                      }
                    />
                  )}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 1 }}>
                <IconButton
                  disabled={index === 0}
                  onClick={() => handleRemovePrimaryContact(index)}
                  sx={(theme) => ({
                    color: theme.palette.neutral[70],
                  })}
                >
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>

        <Divider sx={{ my: "20px", color: "neutral.5" }} />

        <Typography
          variant="body14PX500FW"
          color="neutral.80"
          sx={{ mb: 1.5, display: "block" }}
        >
          Physical Address
        </Typography>

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
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select State"
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
              label="Zip"
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
          <Typography
            variant="body14PX500FW"
            color="neutral.80"
            sx={{ mb: 1.5 }}
          >
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

        <Grid container spacing={2} mt={1}>
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
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select State"
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
                  placeholder="Enter City"
                  value={field.value ?? ""}
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
              label="Zip"
              color="neutral.60"
              isRequired
            />
            <Controller
              name="billingAddress.zipCode"
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  placeholder="Enter Zip Code"
                  value={field.value ?? ""}
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

        <Divider sx={{ my: "20px", color: "neutral.5" }} />

        <Typography variant="body14PX500FW" color="neutral.80" sx={{ mb: 1.5 }}>
          Other Settings
        </Typography>

        <Grid container spacing={2} mt={1}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="body14PX400FW"
              sx={(theme) => ({ color: theme.palette.neutral[80] })}
            >
              RPM Billing Scheme
            </Typography>

            <Controller
              name="rpmBillingScheme"
              control={control}
              render={({ field }) => (
                <CustomRadioButton
                  optionsArray={["99457", "99091"]}
                  selectedvalue={field.value ?? "99457"}
                  onChange={field.onChange}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="body14PX400FW"
              sx={(theme) => ({ color: theme.palette.neutral[80] })}
            >
              Use TPS Billing
            </Typography>
            <Controller
              name="useTpsBilling"
              control={control}
              render={({ field }) => (
                <CustomRadioButton
                  optionsArray={["Yes", "No"]}
                  selectedvalue={field.value ?? "No"}
                  onChange={field.onChange}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="body14PX400FW"
              sx={(theme) => ({ color: theme.palette.neutral[80] })}
            >
              Use TPS CDCES
            </Typography>
            <Controller
              name="useTpsCdces"
              control={control}
              render={({ field }) => (
                <CustomRadioButton
                  optionsArray={["Yes", "No"]}
                  selectedvalue={field.value ?? "No"}
                  onChange={field.onChange}
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

export default AddClinicForm;
