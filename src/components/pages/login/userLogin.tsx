import React from "react"
import { Controller, useForm } from "react-hook-form";
import { Button, Link, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import CustomInput from "../../common-components/custom-input/custom-input";
import CustomLabel from "../../common-components/custom-label/custom-label";
import { yupResolver } from "@hookform/resolvers/yup";
import { widthOfInput, type UserLoginProps } from "./constant";
import { loginSchema } from "../../../constants/yupSchemas";
import AuthPage from "../AuthPage";
import { useNavigate } from "react-router-dom";


const UserLogin: React.FC<UserLoginProps> = () => {
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: "",
    };

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
        formState,
    } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(loginSchema),
        mode: "onChange",
    });

    const onSubmit = (data: any) => {
        console.log(data)

        reset(initialValues);
    }
    return (
        <AuthPage >
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", height: "100%" }} key={"loginUser"}>
                <Grid
                    mt={1.5}
                    width={"475px"}
                    minHeight={"350px"}
                    container
                    alignItems="flex-start"
                    flexDirection={"column"}
                    rowGap={4}
                >
                    <Grid container flexDirection={"column"} rowGap={1} textAlign={'left'} justifyContent={"start"} alignItems={"start"}>
                        <Typography variant="h3Medium" color="neutral.90" >
                            Log in to your account
                        </Typography>

                        <Typography variant="body14PX400FW" color="neutral.50" >
                            Welcome! Please enter your details.
                        </Typography>
                    </Grid>

                    <Box display="flex" flexDirection="column" rowGap={3}>
                        <Grid container width={widthOfInput}>
                            <CustomLabel variant="body5Medium" label="Email" color="neutral.60" />
                            <Controller
                                control={control}
                                name="email"
                                render={({ field }) => (
                                    <CustomInput
                                        placeholder="Enter Email"
                                        hasError={!!errors.email}
                                        errorMessage={(errors.email?.message as string) || ""}
                                        onChange={(event) =>
                                            setValue("email", event.target.value, { shouldValidate: true })
                                        }
                                        name={field.name}
                                        value={field.value}
                                        hasStartMailIcon
                                    />
                                )}
                            />
                        </Grid>

                        <Grid container width={widthOfInput}>
                            <CustomLabel variant="body5Medium" label="Password" />
                            <Controller
                                control={control}
                                name="password"
                                render={({ field }) => (
                                    <CustomInput
                                        placeholder="Enter Password"
                                        isPassword
                                        hasError={!!errors.password}
                                        errorMessage={errors.password?.message}
                                        onChange={(event) =>
                                            setValue("password", event.target.value, { shouldValidate: true })
                                        }
                                        name={field.name}
                                        value={field.value}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid container justifyContent="flex-end" alignItems="center" >
                            <Link sx={{ textDecoration: "none", cursor: "pointer" }} onClick={() =>navigate("/auth/forgot-password")}>
                                <Typography variant="body14PX500FW" color="primary.main" >
                                    Forgot password
                                </Typography>
                            </Link>
                        </Grid>
                    </Box>
                    <Grid width={"100%"} height={"38px"}>
                        <Button variant="contained" fullWidth type="submit" loading={false} disabled={!formState.isValid} >
                            Log In
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </AuthPage>
    )
}

export default UserLogin
