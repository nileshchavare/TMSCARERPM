import * as yup from "yup";
import { passwordIsRequired, passwordRegexErrorMsg } from '../constants/errorMessages'
import { passwordRegex, phoneRegex, zipRegex } from './regex'
import {
    emailIsRequired,
    emailRegexErrorMsg,
} from "../constants/errorMessages";
import { emailRegex } from "./regex";



export const setPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required(passwordIsRequired)
    .matches(passwordRegex, passwordRegexErrorMsg),

  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), ''], "Passwords must match"),
});

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().required(emailIsRequired).matches(emailRegex, emailRegexErrorMsg),
});

export const loginSchema = yup.object().shape({
    password: yup.string().required(passwordIsRequired).matches(passwordRegex, passwordRegexErrorMsg),
    email: yup.string().required(emailIsRequired).matches(emailRegex, emailRegexErrorMsg),
});

//Add Clinic Form values
export const primaryContactSchema = yup.object({
  id: yup.string().required(),
  name: yup.string().trim().required("Name is required"),
  email: yup
    .string()
    .trim()
    .nullable()
    .transform(v => (v === "" ? null : v))
    .email("Invalid email"),
  phone: yup
    .string()
    .trim()
    .nullable()
    .transform(v => (v === "" ? null : v))
    .matches(phoneRegex, "Invalid phone number"),
});

export const addressSchema = yup.object({
  addressLine1: yup.string().trim().nullable().transform(v => (v === "" ? null : v)),
  addressLine2: yup.string().trim().nullable().transform(v => (v === "" ? null : v)),
  state: yup.string().trim().nullable().transform(v => (v === "" ? null : v)),
  city: yup.string().trim().nullable().transform(v => (v === "" ? null : v)),
  zipCode: yup
    .string()
    .trim()
    .nullable()
    .transform(v => (v === "" ? null : v))
    .matches(zipRegex, "Invalid zip code"),
});

export const clinicSchema = yup.object({
  clinicName: yup.string().trim().required("Clinic name is required"),

  groupNpiNumber: yup.string().trim().nullable().transform(v => (v === "" ? null : v)),

  phoneNumber: yup
    .string()
    .trim()
    .nullable()
    .transform(v => (v === "" ? null : v))
    .matches(phoneRegex, "Invalid phone number"),

  email: yup
    .string()
    .trim()
    .nullable()
    .transform(v => (v === "" ? null : v))
    .email("Invalid email"),

  fax: yup
    .string()
    .trim()
    .nullable()
    .transform(v => (v === "" ? null : v))
    .matches(phoneRegex, "Invalid fax number"),

  taxNumber: yup.string().trim().nullable().transform(v => (v === "" ? null : v)),

  tinEin: yup.string().trim().nullable().transform(v => (v === "" ? null : v)),
  specialty: yup.string().trim().nullable().transform(v => (v === "" ? null : v)),

  status: yup.string().required("Status is required"),

  primaryContacts: yup
    .array()
    .of(primaryContactSchema)
    .min(1, "At least one primary contact is required")
    .required(),

  physicalAddress: addressSchema.required(),
  billingAddress: addressSchema.required(),

  billingSameAsPhysical: yup.boolean().required(),

  rpmBillingScheme: yup.string().trim().nullable().transform(v => (v === "" ? null : v)),

  useTpsBilling: yup.mixed<"Yes" | "No">().oneOf(["Yes", "No"]).nullable(),
  useTpsCdces: yup.mixed<"Yes" | "No">().oneOf(["Yes", "No"]).nullable(),
});


export type ClinicFormValues = yup.InferType<typeof clinicSchema>;