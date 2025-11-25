

export interface UserRow {
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

export interface AddStaffFormValues {
  title: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
  location: string;
}
export interface AddProviderFormValues {
  firstName: string;
  lastName: string;
  npiNumber: string;
  email: string;
  phoneNumber: string;
  location: string;

  licenseState: string;
  licenseNumber: string;
  expiryDate: string;

  physicalAddress: {
    addressLine1: string;
    addressLine2: string;
    state: string;
    city: string;
    zipCode: string;
  };

  billingAddress: {
    addressLine1: string;
    addressLine2: string;
    state: string;
    city: string;
    zipCode: string;
  };
}

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
