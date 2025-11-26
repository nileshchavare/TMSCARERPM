import * as yup from "yup";
import {
  clinicNameRequired,
  groupNpiRequired,
  npiNumberInvalid,
  phoneNumberRequired,
  phoneNumberInvalid,
  emailIsRequired,
  emailRegexErrorMsg,
  specialtyRequired,
  statusRequired,
  rpmBillingSchemeRequired,
  useTpsCdcesRequired,
  contactNameRequired,
  contactEmailRequired,
  contactPhoneRequired,
  addressLine1Required,
  stateRequired,
  cityRequired,
  zipCodeRequired,
  zipCodeInvalid,
  firstNameRequired,
  lastNameRequired,
  locationRequired,
  licenseStateRequired,
  licenseNumberRequired,
  expiryDateRequired,
  titleRequired,
  nameRequired,
  roleRequired,
  locationNameRequired,
  taxNumberRequired,
  tinEinRequired,
} from "./errorMessages";
import {
  emailRegex,
  npiNumberRegex,
  phoneNumberTenDigitRegex,
  zipCodeFiveDigitRegex,
} from "./regex";

export const providerSchema = yup.object({
  firstName: yup.string().required(firstNameRequired),
  lastName: yup.string().required(lastNameRequired),
  npiNumber: yup
    .string()
    .matches(npiNumberRegex, npiNumberInvalid)
    .required(groupNpiRequired),
  email: yup
    .string()
    .matches(emailRegex, emailRegexErrorMsg)
    .required(emailIsRequired),
  phoneNumber: yup
    .string()
    .matches(phoneNumberTenDigitRegex, phoneNumberInvalid)
    .required(phoneNumberRequired),
  role: yup.string().required(locationRequired),

  licenseState: yup.string().required(licenseStateRequired),
  licenseNumber: yup.string().required(licenseNumberRequired),
  expiryDate: yup.string().required(expiryDateRequired),

  physicalAddress: yup.object({
    addressLine1: yup.string().required(addressLine1Required),
    addressLine2: yup.string().default(""),
    state: yup.string().required(stateRequired),
    city: yup.string().required(cityRequired),
    zipCode: yup
      .string()
      .matches(zipCodeFiveDigitRegex, zipCodeInvalid)
      .required(zipCodeRequired),
  }).required(),

  billingAddress: yup.object({
    addressLine1: yup.string().required(addressLine1Required),
    addressLine2: yup.string().default(""),
    state: yup.string().required(stateRequired),
    city: yup.string().required(cityRequired),
    zipCode: yup
      .string()
      .matches(zipCodeFiveDigitRegex, zipCodeInvalid)
      .required(zipCodeRequired),
  }).required(),
});

export type AddProviderFormValues = yup.InferType<typeof providerSchema>;

export const addStaffSchema = yup.object({
  title: yup.string().required(titleRequired),
  name: yup.string().required(nameRequired),
  email: yup
    .string()
    .matches(emailRegex, emailRegexErrorMsg)
    .required(emailIsRequired),
  phoneNumber: yup
    .string()
    .matches(phoneNumberTenDigitRegex, phoneNumberInvalid)
    .required(phoneNumberRequired),
  role: yup.string().required(roleRequired),
  location: yup.string().required(locationRequired),
  status:yup.string().required(statusRequired)
});

export type AddStaffFormValues = yup.InferType<typeof addStaffSchema>;

export const addLocationSchema = yup.object().shape({
    locationName: yup.string().required(locationNameRequired),
    phoneNumber: yup
      .string()
      .matches(phoneNumberTenDigitRegex, phoneNumberInvalid)
      .required(phoneNumberRequired),
    email: yup
      .string()
      .matches(emailRegex, emailRegexErrorMsg)
      .required(emailIsRequired),
    npiNumber: yup
      .string()
      .matches(npiNumberRegex, npiNumberInvalid)
      .required(groupNpiRequired),
    taxNumber: yup.string().required(taxNumberRequired),
    tinEin: yup.string().required(tinEinRequired),
    physicalAddress: yup.object().shape({
        addressLine1: yup.string().required(addressLine1Required),
        addressLine2: yup.string().default(""),
        state: yup.string().required(stateRequired),
        city: yup.string().required(cityRequired),
        zipCode: yup
          .string()
          .matches(zipCodeFiveDigitRegex, zipCodeInvalid)
          .required(zipCodeRequired),
    }),
    billingAddress: yup.object().shape({
        addressLine1: yup.string().required(addressLine1Required),
        addressLine2: yup.string().default(""),
        state: yup.string().required(stateRequired),
        city: yup.string().required(cityRequired),
        zipCode: yup
          .string()
          .matches(zipCodeFiveDigitRegex, zipCodeInvalid)
          .required(zipCodeRequired),
    }),
})

export type AddLocationFormValues = yup.InferType<typeof addLocationSchema>;

export const newClinicSchema = yup.object().shape({
  rpmBillingScheme: yup.string().required(rpmBillingSchemeRequired),
  useTpsCdces: yup.string().required(useTpsCdcesRequired),
  useTpsBilling: yup.string().default(""),
  rpmBilling: yup.string().default(""),
  clinicName: yup.string().required(clinicNameRequired),
  groupNpiNumber: yup
    .string()
    .matches(npiNumberRegex, npiNumberInvalid)
    .required(groupNpiRequired),
  phoneNumber: yup
    .string()
    .matches(phoneNumberTenDigitRegex, phoneNumberInvalid)
    .required(phoneNumberRequired),
  email: yup
    .string()
    .matches(emailRegex, emailRegexErrorMsg)
    .required(emailIsRequired),
  fax: yup.string().default(""),
  taxNumber: yup.string().default(""),
  tinEin: yup.string().default(""),
  specialty: yup.string().required(specialtyRequired),
  status: yup.string().required(statusRequired),

  primaryContacts: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required(),
        name: yup.string().required(contactNameRequired),
        email: yup
          .string()
          .matches(emailRegex, emailRegexErrorMsg)
          .required(contactEmailRequired),
        phone: yup
          .string()
          .matches(phoneNumberTenDigitRegex, phoneNumberInvalid)
          .required(contactPhoneRequired),
      })
    )
    .min(1, "At least one contact is required")
    .required(),

  physicalAddress: yup.object().shape({
    addressLine1: yup.string().required(addressLine1Required),
    addressLine2: yup.string().default(""),
    state: yup.string().required(stateRequired),
    city: yup.string().required(cityRequired),
    zipCode: yup
      .string()
      .matches(zipCodeFiveDigitRegex, zipCodeInvalid)
      .required(zipCodeRequired),
  }),

  billingAddress: yup.object().shape({
    addressLine1: yup.string().required(addressLine1Required),
    addressLine2: yup.string().default(""),
    state: yup.string().required(stateRequired),
    city: yup.string().required(cityRequired),
    zipCode: yup
      .string()
      .matches(zipCodeFiveDigitRegex, zipCodeInvalid)
      .required(zipCodeRequired),
  }),
})

export type NewClinicFormValues = yup.InferType<typeof newClinicSchema>;

