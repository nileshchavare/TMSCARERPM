export const US_STATES = [
  { key: "CA", value: "California" },
  { key: "NY", value: "New York" },
  { key: "TX", value: "Texas" },
  { key: "FL", value: "Florida" },
];

export const SPECIALTY_OPTIONS = [
  { key: "SLEEP", value: "Sleep Medicine" },
  { key: "CARDIOLOGY", value: "Cardiology" },
  { key: "PULMONOLOGY", value: "Pulmonology" },
  { key: "NEUROLOGY", value: "Neurology" },
];

export const STATUS_OPTIONS = [
  { key: "ACTIVE", value: "Active" },
  { key: "INACTIVE", value: "Inactive" },
  { key: "PENDING", value: "Pending" },
  { key: "DISABLED", value: "Disabled" },
];

export type PrimaryContact = {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export type Address = {
  addressLine1: string;
  addressLine2?: string;
  state: string;
  city: string;
  zipCode: string;
}

export interface FormValues {
  rpmBillingScheme: string;
  useTpsCdces: string;
  useTpsBilling: string;
  rpmBilling: string;

  clinicName: string;
  groupNpiNumber: string;
  phoneNumber: string;
  email: string;
  fax?: string;
  taxNumber?: string;
  tinEin?: string;
  specialty: string;
  status: string;

  primaryContacts: PrimaryContact[];

  physicalAddress: Address;
  billingAddress: Address;
}

export type ClinicRow = {
  id: string | number;
  clinicName: string;
  speciality?: string;
  email?: string;
  address?: string;
  contactNumber?: string;
  status?: "active" | "inactive" | "pending";
};
