import { Button, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "../../../../components/common-components/custom-input/custom-input";
import CustomLabel from "../../../../components/common-components/custom-label/custom-label";
import type { SetPasswordProps } from "./constant";
import { widthOfInput } from "./constant";
import AuthPage from "../AuthPage";
import { useNavigate } from "react-router-dom";

export type ResetPasswordFormValues = {
  password: string;
  confirmPassword: string;
};

const SetPassword: React.FC<SetPasswordProps> = () => {
  const navigate = useNavigate();
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: initialValues,
    // resolver: yupResolver(setPasswordSchema),
  });
  // use data:ResetPasswordFormValues
  const onSubmit = () => {
    navigate("/auth/login");
  };
  return (
    <AuthPage>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "100%", height: "100%" }}
      >
        <Grid
          mt={1.5}
          width={"475px"}
          minHeight={"350px"}
          container
          alignItems="flex-start"
          flexDirection={"column"}
          rowGap={4}
        >
          <Grid
            container
            flexDirection={"column"}
            rowGap={1}
            textAlign={"left"}
            justifyContent={"start"}
            alignItems={"start"}
          >
            <Typography variant="h3Medium" color="neutral.90">
              Set New password
            </Typography>
          </Grid>

          <Box display="flex" flexDirection="column" rowGap={3}>
            <Grid container width={widthOfInput}>
              <CustomLabel
                variant="body5Medium"
                color="neutral.60"
                label="New Password"
              />
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <CustomInput
                    placeholder="abc@123"
                    isPassword
                    hasError={!!errors.password}
                    errorMessage={errors.password?.message}
                    onChange={(event) =>
                      setValue("password", event.target.value, {
                        shouldValidate: true,
                      })
                    }
                    name={field.name}
                    value={field.value}
                  />
                )}
              />
            </Grid>

            <Grid container width={widthOfInput}>
              <CustomLabel
                variant="body5Medium"
                color="neutral.60"
                label="Confirm Password"
              />
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <CustomInput
                    placeholder="abc@123"
                    isPassword
                    hasError={!!errors.confirmPassword}
                    errorMessage={errors.confirmPassword?.message}
                    onChange={(event) =>
                      setValue("confirmPassword", event.target.value, {
                        shouldValidate: true,
                      })
                    }
                    name={field.name}
                    value={field.value}
                  />
                )}
              />
            </Grid>
          </Box>
          <Grid width={"100%"} height={"38px"}>
            <Button variant="contained" fullWidth type="submit" loading={false}>
              Confirm & Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </AuthPage>
  );
};

export default SetPassword;
