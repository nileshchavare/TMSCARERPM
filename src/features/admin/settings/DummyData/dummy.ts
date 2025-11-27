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


export const locationRows = [
  {
    id: 1,
    locationName: "New York Clinic",
    phoneNumber: "9876543210",
    email: "ny-clinic@example.com",
    npiNumber: "1234567890",
    taxNumber: "TAX-98765",
    address: "123 Main Street, New York, NY 10001",
    status: "Active",
    action: "View",
  },
  {
    id: 2,
    locationName: "Los Angeles Clinic",
    phoneNumber: "9876541200",
    email: "la-clinic@example.com",
    npiNumber: "0987654321",
    taxNumber: "TAX-11223",
    address: "45 Sunset Blvd, Los Angeles, CA 90001",
    status: "Inactive",
    action: "View",
  },
  {
    id: 3,
    locationName: "Houston Clinic",
    phoneNumber: "9001122334",
    email: "houston-clinic@example.com",
    npiNumber: "5556667777",
    taxNumber: "TAX-33445",
    address: "88 Bay Area Road, Houston, TX 77001",
    status: "Pending",
    action: "View",
  },
  {
    id: 4,
    locationName: "Chicago Clinic",
    phoneNumber: "9022334455",
    email: "chicago-clinic@example.com",
    npiNumber: "6677889900",
    taxNumber: "TAX-88990",
    address: "25 Downtown St, Chicago, IL 60007",
    status: "Active",
    action: "View",
  },
  {
    id: 5,
    locationName: "Phoenix Clinic",
    phoneNumber: "9112233445",
    email: "phoenix-clinic@example.com",
    npiNumber: "1231231234",
    taxNumber: "TAX-55667",
    address: "66 Pine Street, Phoenix, AZ 85001",
    status: "Suspended",
    action: "View",
  },
];

// care team home page data
  export const peopleList = [
    { id: 1, name: "Dr. John Smith", role: "Primary Doctor", count: 11 },
    { id: 2, name: "Dr. Emily Carter", role: "Cardiologist", count: 21 },
    { id: 3, name: "Nurse Alex Brown", role: "Nurse", count: 67 },
  ];

  export const assignedClinics = [
    { id: 1, clinicName: "Sunrise Health Clinic", personId: 1, count: 31 },
    { id: 2, clinicName: "City Hospital", personId: 2, count: 24 },
    { id: 3, clinicName: "Metro Care Center", personId: 3, count: 2 },
    { id: 4, clinicName: "Green Valley Clinic", personId: 1, count: 24 },
  ];

  export const patientsData = [
    {
      id: 1,
      clinicId: 1,
      patientId: "P-1010",
      patientName: "John Doe",
      primaryProvider: "Dr. John Smith",
      dateOfBirth: "1985-04-20",
      lastReview: "2025-01-12",
      gmi: 6.8,
      timeInRange: 72,
      status: "Active",
    },
    {
      id: 2,
      clinicId: 1,
      patientId: "P-1011",
      patientName: "Amy Wilson",
      primaryProvider: "Dr. John Smith",
      dateOfBirth: "1988-09-14",
      lastReview: "2025-01-10",
      gmi: 7.2,
      timeInRange: 67,
      status: "Pending",
    },
    {
      id: 3,
      clinicId: 2,
      patientId: "P-1020",
      patientName: "Robert Davis",
      primaryProvider: "Dr. Emily Carter",
      dateOfBirth: "1976-03-09",
      lastReview: "2025-01-08",
      gmi: 7.5,
      timeInRange: 62,
      status: "Active",
    },
    {
      id: 4,
      clinicId: 3,
      patientId: "P-1030",
      patientName: "Sophia Martinez",
      primaryProvider: "Nurse Alex Brown",
      dateOfBirth: "1992-11-22",
      lastReview: "2025-01-07",
      gmi: 6.5,
      timeInRange: 81,
      status: "Inactive",
    },
    {
      id: 5,
      clinicId: 4,
      patientId: "P-1040",
      patientName: "Daniel Lee",
      primaryProvider: "Dr. John Smith",
      dateOfBirth: "1980-02-10",
      lastReview: "2025-01-05",
      gmi: 7.0,
      timeInRange: 70,
      status: "Active",
    },
  ];


  export const allClinic = [
  {
    id: "CL001",
    name: "Sunrise Health Clinic",
    address: "123 Main Street, New York",
    phone: "212-555-1234",
  },
  {
    id: "CL002",
    name: "Green Valley Medical Center",
    address: "45 Greenway Road, California",
    phone: "310-555-7788",
  },
  {
    id: "CL003",
    name: "CityCare Family Clinic",
    address: "89 River Street, Texas",
    phone: "469-555-9123",
  },
  {
    id: "CL004",
    name: "Wellness Primary Care",
    address: "72 Hilltop Avenue, Florida",
    phone: "305-555-6451",
  },
  {
    id: "CL005",
    name: "Lakeside Medical Group",
    address: "250 Lakeshore Drive, Chicago",
    phone: "773-555-2204",
  },
];

export  const allPatients = [
        { key: "P001", value: "John Doe" },
        { key: "P002", value: "Sarah Smith" },
        { key: "P003", value: "Michael Johnson" },
        { key: "P004", value: "Emily Brown" },
        { key: "P005", value: "David Wilson" },
    ];

export const groupRows = [
  {
    id: 1,
    groupName: "John Doe",
    GroupMember: "Administrator",
  },
  {
    id: 2,
    groupName: "Sarah Smith",
    GroupMember: "Doctor",
  },
  {
    id: 3,
    groupName: "Michael Johnson",
    GroupMember: "Nurse",
  },
  {
    id: 4,
    groupName: "Lisa Anderson",
    GroupMember: "Receptionist",
  },
  {
    id: 5,
    groupName: "David Wilson",
    GroupMember: "Billing Manager",
  },
];

export const groupRow = [
  {
    id: 1,
    groupName: "Admin Group",
    GroupMember: "John Doe, Alex Martin",
  },
  {
    id: 2,
    groupName: "Billing Group",
    GroupMember: "Sarah Smith, Tina Brown",
  },
  {
    id: 3,
    groupName: "Nurse Team",
    GroupMember: "Michael Johnson, Emily Davis",
  },
  {
    id: 4,
    groupName: "Doctor Group",
    GroupMember: "Dr. Robert Clark, Dr. Lisa Turner",
  },
  {
    id: 5,
    groupName: "Support Team",
    GroupMember: "Kevin Lee, Olivia Johnson",
  },
  {
    id: 6,
    groupName: "Reception Group",
    GroupMember: "Emma Wilson, Noah Patel",
  },
  {
    id: 7,
    groupName: "Pharmacy Team",
    GroupMember: "Harper Collins, Liam Walker",
  },
  {
    id: 8,
    groupName: "Lab Technicians",
    GroupMember: "Sophia Perez, Ethan Parker",
  },
  {
    id: 9,
    groupName: "IT Support",
    GroupMember: "Aiden Brooks, Mason Rivera",
  },
  {
    id: 10,
    groupName: "HR Department",
    GroupMember: "Ava Mitchell, Chloe Rogers",
  },
];


export const patientRows = [
  {
    id: 1,
    patientId: "P001",
    patientName: "John Doe",
    referringProvider: "Dr. Emily Carter",
    clinicName: "Sunrise Health Clinic",
    dateOfBirth: "1987-05-12",
    contactNumber: "+1 555-123-4567",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    patientId: "P002",
    patientName: "Sarah Williams",
    referringProvider: "Dr. Robert Lee",
    clinicName: "Northside Medical Center",
    dateOfBirth: "1990-11-22",
    contactNumber: "+1 555-234-5678",
    email: "sarah.williams@example.com",
  },
  {
    id: 3,
    patientId: "P003",
    patientName: "Michael Johnson",
    referringProvider: "Dr. Hannah Kim",
    clinicName: "Green Valley Clinic",
    dateOfBirth: "1985-03-18",
    contactNumber: "+1 555-345-6789",
    email: "michael.johnson@example.com",
  },
  {
    id: 4,
    patientId: "P004",
    patientName: "Emily Davis",
    referringProvider: "Dr. Steven Clark",
    clinicName: "CarePoint Family Clinic",
    dateOfBirth: "1992-09-30",
    contactNumber: "+1 555-456-7890",
    email: "emily.davis@example.com",
  },
  {
    id: 5,
    patientId: "P005",
    patientName: "David Wilson",
    referringProvider: "Dr. Laura Perez",
    clinicName: "Wellness Medical Group",
    dateOfBirth: "1981-07-14",
    contactNumber: "+1 555-567-8901",
    email: "david.wilson@example.com",
  },

  {
    id: 6,
    patientId: "P006",
    patientName: "Olivia Brown",
    referringProvider: "Dr. Anthony Scott",
    clinicName: "HealthWay Clinic",
    dateOfBirth: "1994-02-10",
    contactNumber: "+1 555-678-9012",
    email: "olivia.brown@example.com",
  },
  {
    id: 7,
    patientId: "P007",
    patientName: "Ethan Miller",
    referringProvider: "Dr. Grace Cooper",
    clinicName: "Riverbend Medical Center",
    dateOfBirth: "1989-08-25",
    contactNumber: "+1 555-789-0123",
    email: "ethan.miller@example.com",
  },
  {
    id: 8,
    patientId: "P008",
    patientName: "Sophia Anderson",
    referringProvider: "Dr. Charles Morgan",
    clinicName: "Metro Healthcare",
    dateOfBirth: "1993-01-05",
    contactNumber: "+1 555-890-1234",
    email: "sophia.anderson@example.com",
  },
  {
    id: 9,
    patientId: "P009",
    patientName: "Liam Martinez",
    referringProvider: "Dr. Isabella Thomas",
    clinicName: "Premier Family Clinic",
    dateOfBirth: "1986-04-27",
    contactNumber: "+1 555-901-2345",
    email: "liam.martinez@example.com",
  },
  {
    id: 10,
    patientId: "P010",
    patientName: "Ava Thompson",
    referringProvider: "Dr. Benjamin Harris",
    clinicName: "Valley View Medical",
    dateOfBirth: "1991-10-16",
    contactNumber: "+1 555-012-3456",
    email: "ava.thompson@example.com",
  },
];

