import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useForm, Controller, type UseFormGetValues } from "react-hook-form";
import { useState } from "react";
import CustomLabel from "../../../components/common-components/custom-label/custom-label";
import CustomInput from "../../../components/common-components/custom-input/custom-input";
import type {
  CommonFieldProps,
  EditProfileFormType,
  PasswordFormType,
} from "./constant";

const ChangePasswordFields = ({
  control,
  errors,
}: CommonFieldProps<PasswordFormType>) => (
  <Grid container spacing={2}>
    <Grid size={{ xs: 12 }}>
      <CustomLabel
        label="Current Password"
        variant="body14PX400FW"
        color="neutral.50"
        isRequired
      />

      <Controller
        name="current_Password"
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            isPassword
            bgWhite
            placeholder="Enter current password"
            hasError={!!errors.current_Password}
            errorMessage={errors.current_Password?.message}
          />
        )}
      />
    </Grid>

    <Grid size={{ xs: 12 }}>
      <CustomLabel
        label="New Password"
        variant="body14PX400FW"
        color="neutral.50"
        isRequired
      />

      <Controller
        name="new_Password"
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            isPassword
            bgWhite
            placeholder="Enter new password"
            hasError={!!errors.new_Password}
            errorMessage={errors.new_Password?.message}
          />
        )}
      />
    </Grid>

    <Grid size={{ xs: 12 }}>
      <CustomLabel
        label="Confirm Password"
        variant="body14PX400FW"
        color="neutral.50"
        isRequired
      />

      <Controller
        name="confirm_Password"
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            isPassword
            bgWhite
            placeholder="Enter confirm password"
            hasError={!!errors.confirm_Password}
            errorMessage={errors.confirm_Password?.message}
          />
        )}
      />
    </Grid>
  </Grid>
);

const ProfileEditFields = ({
  control,
  errors,
}: CommonFieldProps<EditProfileFormType>) => (
  <Grid container spacing={2}>
    <Grid size={{ xs: 12, md: 6 }}>
      <CustomLabel
        label="Name"
        variant="body14PX400FW"
        color="neutral.50"
        isRequired
      />

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            bgWhite
            placeholder="Enter name"
            hasError={!!errors.name}
            errorMessage={errors.name?.message}
          />
        )}
      />
    </Grid>

    <Grid size={{ xs: 12, md: 6 }}>
      <CustomLabel
        label="Email"
        variant="body14PX400FW"
        color="neutral.50"
        isRequired
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            bgWhite
            placeholder="Enter email"
            hasError={!!errors.email}
            errorMessage={errors.email?.message}
          />
        )}
      />
    </Grid>

    <Grid size={{ xs: 12, md: 6 }}>
      <CustomLabel
        label="Phone Number"
        variant="body14PX400FW"
        color="neutral.50"
        isRequired
      />

      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            bgWhite
            placeholder="Enter phone number"
            hasError={!!errors.phoneNumber}
            errorMessage={errors.phoneNumber?.message}
          />
        )}
      />
    </Grid>

    <Grid size={{ xs: 12, md: 6 }}>
      <CustomLabel
        label="User Type"
        variant="body14PX400FW"
        color="neutral.50"
        isRequired
      />

      <Controller
        name="userType"
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            bgWhite
            placeholder="Enter user type"
            hasError={!!errors.userType}
            errorMessage={errors.userType?.message}
          />
        )}
      />
    </Grid>

    <Grid size={{ xs: 12, md: 6 }}>
      <CustomLabel
        label="Role"
        variant="body14PX400FW"
        color="neutral.50"
        isRequired
      />

      <Controller
        name="role"
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            bgWhite
            placeholder="Enter role"
            hasError={!!errors.role}
            errorMessage={errors.role?.message}
          />
        )}
      />
    </Grid>
  </Grid>
);

interface ProfileViewProps {
  getValues: UseFormGetValues<EditProfileFormType>;
}

const ProfileView = ({ getValues }: ProfileViewProps) => (
  <Grid container spacing={2}>
    <Field label="Name" value={getValues("name")} />
    <Field label="Email" value={getValues("email")} />

    <Grid size={{ xs: 12 }}>
      <Divider />
    </Grid>

    <Field label="Phone Number" value={getValues("phoneNumber")} />
    <Field label="Role Type" value={getValues("userType")} />

    <Grid size={{ xs: 12 }}>
      <Divider />
    </Grid>

    <Field label="Role" value={getValues("role")} />
  </Grid>
);

interface FieldProps {
  label: string;
  value: string;
}

const Field = ({ label, value }: FieldProps) => (
  <Grid size={{ xs: 12, md: 6 }}>
    <Typography
      sx={(theme) => ({
        fontWeight: 400,
        fontSize: "14px",
        color: theme.palette.neutral[50],
        mb: 1,
      })}
    >
      {label}
    </Typography>
    <Typography
      sx={(theme) => ({
        fontWeight: 400,
        fontSize: "14px",
        color: theme.palette.neutral[80],
      })}
    >
      {value}
    </Typography>
  </Grid>
);

interface FooterProps {
  setMode: (mode: "view" | "edit" | "password") => void;
}

const ProfileViewFooter = ({ setMode }: FooterProps) => (
  <Box borderTop="1px solid #E0E0E0" p={2}>
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => setMode("password")}
        >
          Change Password
        </Button>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Button fullWidth variant="contained" onClick={() => setMode("edit")}>
          Edit
        </Button>
      </Grid>
    </Grid>
  </Box>
);

const ProfileEditFooter = ({ setMode }: FooterProps) => (
  <Box mt={2}>
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Button fullWidth variant="outlined" onClick={() => setMode("view")}>
          Cancel
        </Button>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Button fullWidth variant="contained" type="submit">
          Save
        </Button>
      </Grid>
    </Grid>
  </Box>
);

const PasswordFooter = ({ setMode }: FooterProps) => (
  <Box mt={2}>
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Button fullWidth variant="outlined" onClick={() => setMode("view")}>
          Cancel
        </Button>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Button fullWidth variant="contained" type="submit">
          Set Password
        </Button>
      </Grid>
    </Grid>
  </Box>
);

const Profile = () => {
  const [mode, setMode] = useState<"view" | "edit" | "password">("view");

  const editForm = useForm<EditProfileFormType>({
    defaultValues: {
      name: "John Doe",
      email: "Johndoe@gmail.com",
      phoneNumber: "(205)555-0119",
      userType: "Admin",
      role: "SuperAdmin",
    },
    mode: "onChange",
  });

  const passwordForm = useForm<PasswordFormType>({
    defaultValues: {
      current_Password: "",
      new_Password: "",
      confirm_Password: "",
    },
    mode: "onChange",
  });

  const initials = editForm
    .getValues("name")
    .split(" ")
    .map((n) => n[0])
    .join("");

  const handleEditSave = () => setMode("view");
  const handlePasswordSave = () => setMode("view");

  return (
    <Grid container justifyContent="center" p={2} alignItems="flex-start">
      <Box
        sx={(theme) => ({
          border: "1px solid",
          borderColor: theme.palette.neutral[5],
          backgroundColor: "#FFF",
          borderRadius: "8px",
          maxWidth: "650px",
          width: "100%",
          minWidth: "300px",
          height: "fit-content",
          mx: "auto",
        })}
      >
        <Box p={2}>
          <Typography variant="body18PX600FW" color="neutral.90">
            {mode === "view" && "My Profile"}
            {mode === "edit" && "Edit Profile"}
            {mode === "password" && "Change Password"}
          </Typography>
        </Box>

        <Box p={"18px 24px 24px 24px"} borderTop="1px solid #E0E0E0">
          {mode !== "password" && (
            <Box
              sx={(theme) => ({
                borderRadius: 1,
                backgroundColor: theme.palette.neutral[5],
                p: 2,
                display: "flex",
                justifyContent: "center",
              })}
            >
              <Avatar
                sx={{
                  bgcolor: "#750D8C",
                  fontSize: 45,
                  width: 100,
                  height: 100,
                }}
              >
                {initials}
              </Avatar>
            </Box>
          )}

          <Box mt={2}>
            {mode === "view" && <ProfileView getValues={editForm.getValues} />}

            {mode === "edit" && (
              <form onSubmit={editForm.handleSubmit(handleEditSave)}>
                <ProfileEditFields
                  control={editForm.control}
                  errors={editForm.formState.errors}
                />
                <ProfileEditFooter setMode={setMode} />
              </form>
            )}

            {mode === "password" && (
              <form onSubmit={passwordForm.handleSubmit(handlePasswordSave)}>
                <ChangePasswordFields
                  control={passwordForm.control}
                  errors={passwordForm.formState.errors}
                />
                <PasswordFooter setMode={setMode} />
              </form>
            )}
          </Box>
        </Box>

        {mode === "view" && <ProfileViewFooter setMode={setMode} />}
      </Box>
    </Grid>
  );
};

export default Profile;
