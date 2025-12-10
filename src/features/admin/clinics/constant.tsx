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

export const TASK_STATUS_OPTIONS = [
  { key: "ALL", value: "All" },
  { key: "TODO", value: "To Do" },
  { key: "OVER_DUE", value: "Over Due" },
  { key: "COMPLETED", value: "Completed" },
];

export type PrimaryContact = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export type Address = {
  addressLine1: string;
  addressLine2?: string;
  state: string;
  city: string;
  zipCode: string;
};

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

export const clinicOptions = [
  { key: "C001", value: "Sunrise Health Clinic" },
  { key: "C002", value: "Northside Medical Center" },
  { key: "C003", value: "Green Valley Clinic" },
  { key: "C004", value: "CarePoint Family Clinic" },
  { key: "C005", value: "Wellness Medical Group" },
  { key: "C006", value: "Riverbend Medical Center" },
  { key: "C007", value: "Metro Healthcare" },
  { key: "C008", value: "Premier Family Clinic" },
  { key: "C009", value: "Valley View Medical" },
];

export interface UserData {
  id: number;
  userId: string;
  username: string;
  roleType: string;
  role: string;
  email: string;
  contactNumber: string;
  status: string;
  action: string;
}

export interface LocationData {
  id: number;
  locationName: string;
  phoneNumber: string;
  email: string;
  npiNumber: string;
  taxNumber: string;
  address: string;
  status: string;
  action: string;
}
