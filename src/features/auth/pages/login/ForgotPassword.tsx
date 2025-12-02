import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import CustomInput from "../../../../components/common-components/custom-input/custom-input";
import CustomLabel from "../../../../components/common-components/custom-label/custom-label";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "../../../../constants/yupSchemas";
import { widthOfInput, type ForgotPasswordProps } from "./constant";
import AuthPage from "../AuthPage";
import { useNavigate } from "react-router-dom";

export type ForgotpasswordType = {
  email: string;
};

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(forgotPasswordSchema),
  });
  // use here data: ForgotpasswordType
  const onSubmit = () => {
    navigate("/auth/otp");
  };
  return (
    <AuthPage>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "100%", height: "100%" }}
        key={"forgotPassword"}
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
              Forgot Password
            </Typography>

            <Typography variant="body14PX400FW" color="neutral.50">
              Please enter your email to recieve verification code
            </Typography>
          </Grid>

          <Box display="flex" flexDirection="column" rowGap={3}>
            <Grid container width={widthOfInput}>
              <CustomLabel
                variant="body5Medium"
                label="Email"
                color="neutral.60"
              />
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <CustomInput
                    placeholder="Enter Email"
                    hasError={!!errors.email}
                    errorMessage={(errors.email?.message as string) || ""}
                    onChange={(event) =>
                      setValue("email", event.target.value, {
                        shouldValidate: true,
                      })
                    }
                    name={field.name}
                    value={field.value}
                    hasStartMailIcon
                  />
                )}
              />
            </Grid>
          </Box>
          <Grid width={"100%"} height={"38px"}>
            <Button variant="contained" type="submit" fullWidth>
              Send verification Code
            </Button>
          </Grid>
        </Grid>
      </form>
    </AuthPage>
  );
};

export default ForgotPassword;
