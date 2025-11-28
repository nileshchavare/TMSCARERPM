import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import CustomLabel from "../../../components/common-components/custom-label/custom-label";
import CustomInput from "../../../components/common-components/custom-input/custom-input";


const titleCase = (str?: string) => {
  if (!str) return "";

  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((word) =>
      word.length > 0
        ? word[0].toUpperCase() + word.slice(1)
        : ""
    )
    .join(" ");
};
const formatLabel = (str: string) => {
  return str
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());
};



const ChangePasswordFields = ({ control, errors }: any) => (
  <Grid container spacing={2}>
    {["current_Password", "new_Password", "confirm_Password"].map((field) => (
      <Grid size={{ xs: 12 }} key={field}>
        <CustomLabel label={formatLabel(titleCase(field))} variant="body14PX400FW" color="neutral.50" isRequired />
        <Controller
          name={field}
          control={control}
          render={({ field: f }) => (
            <CustomInput
              {...f}
              isPassword
              bgWhite
              placeholder={`Enter ${field}`}
              hasError={!!errors[field]}
            />
          )}
        />
      </Grid>
    ))}
  </Grid>
);

const ProfileEditFields = ({ control, errors }: any) => (
  <Grid container spacing={2}>
    {["name", "email", "phoneNumber", "userType", "role"].map((field) => (
      <Grid size={{ xs: 12, md: 6 }} key={field}>
        <CustomLabel label={titleCase(field)} variant="body14PX400FW" color="neutral.50" isRequired />
        <Controller
          name={field}
          control={control}
          render={({ field: f }) => (
            <CustomInput
              {...f}
              bgWhite
              placeholder={`Enter ${field}`}
              hasError={!!errors[field]}
              errorMessage={errors[field]?.message}
            />
          )}
        />
      </Grid>
    ))}
  </Grid>
);

const ProfileView = ({ getValues }: any) => (
  <Grid container spacing={2}>
    <Field label="Name" value={getValues("name")} />
    <Field label="Email" value={getValues("email")} />

    <Grid size={{ xs: 12 }}><Divider /></Grid>

    <Field label="Phone Number" value={getValues("phoneNumber")} />
    <Field label="Role Type" value={getValues("userType")} />

    <Grid size={{ xs: 12 }} ><Divider /></Grid>

    <Field label="Role" value={getValues("role")} />
  </Grid>
);

const Field = ({ label, value }: any) => (
  <Grid size={{ xs: 12, md: 6 }} >
    <Typography sx={(theme) => ({ fontWeight: 400, fontSize: '14px', color: theme.palette.neutral[50] })} >{label}</Typography>
    <Typography sx={(theme) => ({ fontWeight: 400, fontSize: '14px', color: theme.palette.neutral[80] })}>{value}</Typography>
  </Grid>
);

const ProfileViewFooter = ({ setMode }: any) => (
  <Box borderTop="1px solid #E0E0E0" p={2}>
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Button fullWidth variant="outlined" onClick={() => setMode("password")}>
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

const ProfileEditFooter = ({ setMode }: any) => (
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

const PasswordFooter = ({ setMode }: any) => (
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

  const editForm = useForm({
    defaultValues: {
      name: "John Doe",
      email: "Johndoe@gmail.com",
      phoneNumber: "(205)555-0119",
      userType: "Admin",
      role: "SuperAdmin",
    },
    mode: "onChange",
  });

  const passwordForm = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const initials = editForm.getValues("name")
    .split(" ")
    .map((n) => n[0])
    .join("");

  const handleEditSave = (values: any) => {
    console.log("UPDATE PROFILE API:", values);
    setMode("view");
  };

  const handlePasswordSave = (values: any) => {
    console.log("CHANGE PASSWORD API:", values);
    setMode("view");
  };

  return (
    <Grid container justifyContent="center" p={2} alignItems="flex-start">

      <Box
        sx={(theme) => ({
          border: "1px solid",
          borderColor: theme.palette.neutral[5],
          backgroundColor: "#FFF",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "100%",
          minWidth:'300px',
          height: "fit-content",
          mx: "auto"
        })}
      >

        <Box p={2}>
          <Typography variant="body18PX600FW" color="neutral.90">
            {mode === "view" && "My Profile"}
            {mode === "edit" && "Edit Profile"}
            {mode === "password" && "Change Password"}
          </Typography>
        </Box>
        <Box p={"18px 24px"} borderTop="1px solid #E0E0E0">
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
            {mode === "view" && (
              <ProfileView getValues={editForm.getValues} />
            )}

            {mode === "edit" && (
              <form onSubmit={editForm.handleSubmit(handleEditSave)}>
                <ProfileEditFields control={editForm.control} errors={editForm.formState.errors} />
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

        {mode === "view" && (
          <ProfileViewFooter setMode={setMode} />
        )}
      </Box>
    </Grid>
  );
};

export default Profile;




