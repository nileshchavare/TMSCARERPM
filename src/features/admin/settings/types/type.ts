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

  physicalAddress1: string;
  physicalAddress2: string;
  physicalState: string;
  physicalCity: string;
  physicalZip: string;

  billingSameAsPhysical: boolean;
  billingAddress1: string;
  billingAddress2: string;
  billingState: string;
  billingCity: string;
  billingZip: string;
}


