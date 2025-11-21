import type { ClinicRow } from "../../clinics/constant";
import type { UserRow } from "../types/type";

export const userRows: UserRow[] = [
  {
    id: 1,
    userId: "U001",
    username: "John Doe",
    roleType: "Admin",
    role: "Super Admin",
    email: "john.doe@example.com",
    contactNumber: "9876543210",
    status: "Active",
    action: "Edit",
  },
  {
    id: 2,
    userId: "U002",
    username: "Sarah Smith",
    roleType: "Manager",
    role: "Clinic Manager",
    email: "sarah.smith@example.com",
    contactNumber: "9876532109",
    status: "Inactive",
    action: "Edit",
  },
  {
    id: 3,
    userId: "U003",
    username: "Michael Brown",
    roleType: "Staff",
    role: "Nurse",
    email: "michael.brown@example.com",
    contactNumber: "9876512345",
    status: "Active",
    action: "Edit",
  },
  {
    id: 4,
    userId: "U004",
    username: "Emily Johnson",
    roleType: "Staff",
    role: "Technician",
    email: "emily.johnson@example.com",
    contactNumber: "9876587654",
    status: "Active",
    action: "Edit",
  },
  {
    id: 5,
    userId: "U005",
    username: "David Wilson",
    roleType: "Admin",
    role: "System Admin",
    email: "david.wilson@example.com",
    contactNumber: "9876578901",
    status: "Inactive",
    action: "Edit",
  },
];

// Example data
export const allClinicRows: ClinicRow[] = [
  {
    id: 1,
    clinicName: "Sunrise Clinic",
    speciality: "Cardiology",
    email: "contact@sunrise.com",
    address: "123 Main St, City",
    contactNumber: "+1 555 1234",
    status: "active",
  },
  {
    id: 2,
    clinicName: "Green Health",
    speciality: "General Practice",
    email: "hello@greenhealth.com",
    address: "456 Park Ave, City",
    contactNumber: "+1 555 5678",
    status: "inactive",
  },
];