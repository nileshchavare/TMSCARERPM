import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../components/common-components/custom-input/custom-input";
import DropDownForText from "../components/common-components/drop-dwon-for-text/drop-down-for-text";
import CustomSingleCheckBox from "../components/common-components/custom-checkbox/single-checkbox";
import CustomRadioButton from "../components/common-components/radio-button/radio-button";
import DrawerFooterButtons from "../components/ui/DrawerFooter";
import CustomLabel from "../components/common-components/custom-label/custom-label";
import { SPECIALTY_OPTIONS, STATUS_OPTIONS, US_STATES, type FormValues } from "../features/admin/clinics/constant";
import { clinicSchema } from "../constants/yupSchemas";


const AddClinicForm: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const defaultValues: FormValues = {
    clinicName: "",
    groupNpiNumber: null,
    phoneNumber: null,
    email: null,
    fax: null,
    taxNumber: null,
    tinEin: null,
    specialty: null,
    status: "",

    primaryContacts: [
      { id: `${Date.now()}`, name: "", email: null, phone: null }
    ],

    physicalAddress: {
      addressLine1: null,
      addressLine2: null,
      state: null,
      city: null,
      zipCode: null,
    },

    billingAddress: {
      addressLine1: null,
      addressLine2: null,
      state: null,
      city: null,
      zipCode: null,
    },

    billingSameAsPhysical: false,

    rpmBillingScheme: null,
    useTpsBilling: null,
    useTpsCdces: null,
  };


  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(clinicSchema),
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "primaryContacts",
    keyName: "keyId",
  });

  const billingSameAsPhysical = watch("billingSameAsPhysical");
  const physicalAddr = watch("physicalAddress");

  useEffect(() => {
    if (billingSameAsPhysical) {
      setValue("billingAddress", { ...physicalAddr });
    }
  }, [billingSameAsPhysical, physicalAddr, setValue]);

  // const handleAddPrimaryContact = () =>
  // append({ id: `${Date.now()}`, name: "", email: "", phone: "" });

  const handleRemovePrimaryContact = (index: number) => {
    if (fields.length > 1) remove(index);
  };

  const onSubmit = async (data: FormValues) => {
    console.log("SUBMIT:", data);
    reset(defaultValues);
    onClose?.();
  };

  const handleCancel = () => {
    reset(defaultValues);
    onClose?.();
  };

  return (
    <Box sx={{ height: "100%", position: "relative" }}>
      <Box
        sx={{
          p: 3,
          height: "100%",
          overflowY: "auto",
          pb: 15,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          <Typography variant="body14PX500FW" color="neutral.80" sx={{ marginBottom: '12px !important' }}>
            Demographics
          </Typography>

          <Grid container spacing={2}>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel variant="body5Medium" label="Clinic Name" color="neutral.60" />
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
              <CustomLabel variant="body5Medium" label="Group NPI Number" color="neutral.60" />
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
              <CustomLabel variant="body5Medium" label="Phone Number" color="neutral.60" />
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
              <CustomLabel variant="body5Medium" label="Email" color="neutral.60" />
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
                    isNumeric
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
                    hasError={!!errors.fax}
                    errorMessage={errors.fax?.message as string}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel variant="body5Medium" label="Tax Number" color="neutral.60" />
              <Controller
                name="taxNumber"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Enter Email"
                    bgWhite
                    hasError={!!errors.taxNumber}
                    errorMessage={errors.taxNumber?.message as string}
                  />
                )}
              />
            </Grid>


            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel variant="body5Medium" label="TIN/EIN" color="neutral.60" />
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
              <CustomLabel variant="body5Medium" label="Specialty" color="neutral.60" />
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
                      <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>
                        {errors.specialty?.message as string}
                      </Typography>
                    )}
                  </>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel variant="body5Medium" label="Status" color="neutral.60" />
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
                      <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>
                        {errors.status?.message as string}
                      </Typography>
                    )}
                  </>
                )}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: '20px', color: 'neutral.5' }} />

          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="body14PX500FW" color="neutral.80" sx={{ marginBottom: '12px !important' }}>
              Primary Contact
            </Typography>
            <Button startIcon={<AddIcon />} variant="outlined" sx={(theme) => ({ backgroundColor: theme.palette.primary[10], padding: '4px 10px' })}
            >
              Add
            </Button>
          </Box>

          <Grid container spacing={2}>
            {fields.map((item, index) => (
              <React.Fragment key={item.id}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomLabel variant="body5Medium" label="Name" color="neutral.60" />
                  <Controller
                    name={`primaryContacts.${index}.name`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        {...field}
                        value={field.value ?? ""}
                        placeholder="Enter Name"
                        bgWhite
                        hasError={!!(errors.primaryContacts?.[index] as any)?.name}
                        errorMessage={((errors.primaryContacts?.[index] as any)?.name?.message as string) ?? ""}
                      />
                    )}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomLabel variant="body5Medium" label="Email" color="neutral.60" />
                  <Controller
                    name={`primaryContacts.${index}.email`}
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        {...field}
                        value={field.value ?? ""}
                        placeholder="Enter Email"
                        bgWhite
                        hasError={!!(errors.primaryContacts?.[index] as any)?.email}
                        errorMessage={((errors.primaryContacts?.[index] as any)?.email?.message as string) ?? ""}
                      />
                    )}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <CustomLabel variant="body5Medium" label="Phone Number" color="neutral.60" />
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
                        hasError={!!(errors.primaryContacts?.[index] as any)?.phone}
                        errorMessage={((errors.primaryContacts?.[index] as any)?.phone?.message as string) ?? ""}
                      />
                    )}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          <Divider sx={{ my: '20px', color: 'neutral.5' }} />

          <Typography variant="body14PX500FW" color="neutral.80" sx={{ marginBottom: '12px !important' }}>
            Physical Address
          </Typography>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel variant="body5Medium" label="Address Line 1" color="neutral.60" />
              <Controller
                name="physicalAddress.addressLine1"
                control={control}
                render={({ field }) => (
                  <CustomInput {...field} value={field.value ?? ""} placeholder="Enter Address Line 1" bgWhite />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel variant="body5Medium" label="Address Line 2" color="neutral.60" />
              <Controller
                name="physicalAddress.addressLine2"
                control={control}
                render={({ field }) => (
                  <CustomInput {...field} value={field.value ?? ""} placeholder="Enter Address Line 2" bgWhite />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel variant="body5Medium" label="State" color="neutral.60" />
              <Controller
                name="physicalAddress.state"
                control={control}
                render={({ field }) => (
                  <DropDownForText
                    options={US_STATES}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select State"
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel variant="body5Medium" label="City" color="neutral.60" />
              <Controller
                name="physicalAddress.city"
                control={control}
                render={({ field }) => (
                  <CustomInput {...field} value={field.value ?? ""} placeholder="Enter City" bgWhite />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel variant="body5Medium" label="Zip" color="neutral.60" />
              <Controller
                name="physicalAddress.zipCode"
                control={control}
                render={({ field }) => (
                  <CustomInput {...field} value={field.value ?? ""} placeholder="Enter Zip Code" bgWhite isNumeric />
                )}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: '20px', color: 'neutral.5' }} />
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1.5}>

          <Typography variant="body14PX500FW" color="neutral.80" sx={{ marginBottom: '12px !important' }}>
            Billing Address
          </Typography>
            <Controller
              name="billingSameAsPhysical"
              control={control}
              render={({ field }) => (
                <CustomSingleCheckBox
                  checked={field.value}
                  handleChange={(e) => field.onChange(e.target.checked)}
                  label="Same as Physical Address"
                />
              )}
            />
          </Box>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel variant="body5Medium" label="Address line 1" color="neutral.60" />
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
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <CustomLabel variant="body5Medium" label="Address line 2" color="neutral.60" />
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
              <CustomLabel variant="body5Medium" label="State" color="neutral.60" />
              <Controller
                name="billingAddress.state"
                control={control}
                render={({ field }) => (
                  <DropDownForText
                    options={US_STATES}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select State"
                    disableField={billingSameAsPhysical}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel variant="body5Medium" label="City" color="neutral.60" />
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
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <CustomLabel variant="body5Medium" label="Zip" color="neutral.60" />
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
                  />
                )}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: '20px', color: 'neutral.5' }} />

          <Typography variant="body14PX500FW" color="neutral.80" sx={{ marginBottom: '12px !important' }}>
            Other Settings
          </Typography>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="body14PX400FW" sx={(theme) => ({color: theme.palette.neutral[80],  })} >
                RPM Billing Scheme</Typography>
            
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
             <Typography variant="body14PX400FW" sx={(theme) => ({color: theme.palette.neutral[80],  })} >
                Use TPS Billing</Typography>
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
              <Typography variant="body14PX400FW" sx={(theme) => ({color: theme.palette.neutral[80],  })} >
                Use TPS CDCES</Typography>
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
        </form>
      </Box>
      <DrawerFooterButtons onCancel={handleCancel} onSave={() => handleSubmit(onSubmit)()} loading={false} />
    </Box>
  );
};

export default AddClinicForm;
