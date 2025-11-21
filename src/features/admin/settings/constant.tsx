//addStaff.schema.ts
import * as yup from "yup";

export const addStaffSchema = yup.object({
  title: yup.string().required("Title is required"),
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  role: yup.string().required("Role is required"),
  location: yup.string().required("Location is required"),
});

export const roleOptions = [
  { key: "admin", value: "Admin" },
  { key: "manager", value: "Manager" },
  { key: "staff", value: "Staff" },
];

export const locationOptions = [
  { key: "ny", value: "New York" },
  { key: "la", value: "Los Angeles" },
  { key: "remote", value: "Remote" },
];

//provider.schema.ts
export const providerSchema = yup.object().shape({

  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  npiNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "NPI must be 10 digits")
    .required("NPI number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  location: yup.string().required("Location is required"),

  licenseState: yup.string().required("State is required"),
  licenseNumber: yup.string().required("License number is required"),
  expiryDate: yup.string().required("Expiry date is required"),

  physicalAddress1: yup.string().required("Address line 1 is required"),
  physicalAddress2: yup.string(),
  physicalState: yup.string().required("State is required"),
  physicalCity: yup.string().required("City is required"),
  physicalZip: yup
    .string()
    .matches(/^[0-9]{5}$/, "ZIP must be 5 digits")
    .required("ZIP code is required"),

  billingSameAsPhysical: yup.boolean(),
  billingAddress1: yup.string().when("billingSameAsPhysical", {
    is: false,
    then: (schema) => schema.required("Address line 1 is required"),
  }),
  billingAddress2: yup.string(),
  billingState: yup.string().when("billingSameAsPhysical", {
    is: false,
    then: (schema) => schema.required("State is required"),
  }),
  billingCity: yup.string().when("billingSameAsPhysical", {
    is: false,
    then: (schema) => schema.required("City is required"),
  }),
  billingZip: yup.string().when("billingSameAsPhysical", {
    is: false,
    then: (schema) =>
      schema
        .matches(/^[0-9]{5}$/, "ZIP must be 5 digits")
        .required("ZIP code is required"),
  }),
});

