import type { Control, FieldErrors, FieldValues } from "react-hook-form";

export interface EditProfileFormType {
  name: string;
  email: string;
  phoneNumber: string;
  userType: string;
  role: string;
}

export interface PasswordFormType {
  current_Password: string;
  new_Password: string;
  confirm_Password: string;
}

export interface CommonFieldProps<T extends FieldValues> {
  control: Control<T>;
  errors: FieldErrors<T>;
}
