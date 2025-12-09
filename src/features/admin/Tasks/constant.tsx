export type TaskRow = {
  id: string;
  taskTitle: string;
  category?: string;
  patientName?: string;
  assignedBy?: string;
  assignedTo?: string;
  createdOn: string;
  dueDate: string;
  source: string;
  status?: "completed" | "over-due" | "todo";
  priority: string;
};

export type PatientTaskRow = {
  id: number;
  taskName: string;
  Priority: string;
  reviewedBy: string;
  dueDate: string;
  taskStatus: string;
  taskType: string;
  completedDate: string;
};

export const TASK_CATEGORY_OPTIONS = [
  { key: "group", value: "Group" },
  { key: "indivisual", value: "Indivisual" },
];

export const PATIENT_NAME_OPTIONS = [
  { key: "john-doe", label: "John Doe", value: "John Doe" },
  { key: "emma-watson", label: "Emma Watson", value: "Emma Watson" },
  {
    key: "michael-johnson",
    label: "Michael Johnson",
    value: "Michael Johnson",
  },
  { key: "sarah-lee", label: "Sarah Lee", value: "Sarah Lee" },
  { key: "david-clark", label: "David Clark", value: "David Clark" },
  { key: "olivia-brown", label: "Olivia Brown", value: "Olivia Brown" },
  { key: "chris-evans", label: "Chris Evans", value: "Chris Evans" },
  { key: "ava-thompson", label: "Ava Thompson", value: "Ava Thompson" },
  { key: "henry-wilson", label: "Henry Wilson", value: "Henry Wilson" },
  { key: "sophia-garcia", label: "Sophia Garcia", value: "Sophia Garcia" },
];

export const ASSIGNED_TO_OPTIONS = [
  { key: "nurse-kelly", label: "Nurse Kelly", value: "Nurse Kelly" },
  { key: "reception", label: "Reception", value: "Reception" },
  {
    key: "patient-support",
    label: "Patient Support",
    value: "Patient Support",
  },
  { key: "support", label: "Support", value: "Support" },
  { key: "nurse-helen", label: "Nurse Helen", value: "Nurse Helen" },
  { key: "nurse-team", label: "Nurse Team", value: "Nurse Team" },
  { key: "support-team", label: "Support Team", value: "Support Team" },
  { key: "receptionist", label: "Receptionist", value: "Receptionist" },
  { key: "medical-staff", label: "Medical Staff", value: "Medical Staff" },
  { key: "pharmacy", label: "Pharmacy", value: "Pharmacy" },
];

export const PRIORITY_OPTIONS = [
  { key: "high", label: "High", value: "High" },
  { key: "medium", label: "Medium", value: "Medium" },
  { key: "low", label: "Low", value: "Low" },
];

export const STATUS_OPTIONS = [
  { key: "todo", label: "To Do", value: "todo" },
  { key: "over-due", label: "Over Due", value: "Over Due" },
  { key: "completed", label: "Completed", value: "Completed" },
];

export const taskStatus = {
  todo: "To Do",
  "over-due": "Over Due",
  completed: "Completed",
};
