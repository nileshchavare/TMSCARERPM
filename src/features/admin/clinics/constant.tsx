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
  name?: string;
  email?: string;
  phone?: string;
};

export type Address = {
  addressLine1?: string;
  addressLine2?: string;
  state?: string;
  city?: string;
  zipCode?: string;
};

export interface FormValues {
  clinicName: string;
  groupNpiNumber: string | null;
  phoneNumber: string | null;
  email: string | null;
  fax: string | null;
  taxNumber: string | null;
  tinEin: string | null;
  specialty: string | null;
  status: string;

  primaryContacts: {
    id: string;
    name: string;
    email: string | null;
    phone: string | null;
  }[];

  physicalAddress: {
    addressLine1: string | null;
    addressLine2: string | null;
    state: string | null;
    city: string | null;
    zipCode: string | null;
  };

  billingAddress: {
    addressLine1: string | null;
    addressLine2: string | null;
    state: string | null;
    city: string | null;
    zipCode: string | null;
  };

  billingSameAsPhysical: boolean;

  rpmBillingScheme: string | null;

  useTpsBilling: "Yes" | "No" | null;
  useTpsCdces: "Yes" | "No" | null;
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
