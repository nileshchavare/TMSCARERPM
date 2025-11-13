import { Box, Button, Typography } from '@mui/material'
import { Grid } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import CustomLabel from '../../common-components/custom-label/custom-label';
import CustomOtp from '../../common-components/custom-otp/custom-otp';
import { widthOfInput, type OtpProps } from './constant';
import AuthPage from '../AuthPage';
import { useNavigate } from 'react-router-dom';

const Otp: React.FC<OtpProps> = () => {
    const [timeLeft, setTimeLeft] = useState(30);
    const navigate = useNavigate();
    const initialValues = {
        otp: '',
    };

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
        formState
    } = useForm({
        defaultValues: initialValues,
    });

    useEffect(() => {
        if (timeLeft === 0) return;

        const timer = setTimeout(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleResend = () => {
        setTimeLeft(30);
    };

    const onSubmit = (data: any) => {
        navigate("/auth/set-password")
        console.log("6-digit OTP string:", data.otp);
        reset(initialValues);
    }
    return (
        <AuthPage >
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", height: "100%" }} key={"otp"}>
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
                        <Typography variant="h3Medium" color='neutral.90' >
                            OTP Verification
                        </Typography>

                        <Typography variant="body14PX400FW" color='neutral.50' >
                            Check the code in the invitation email sent <Box component={'span'} sx={{ color: 'neutral.70' }}>johndoe@example.com</Box>
                        </Typography>
                    </Grid>

                    <Box display="flex" flexDirection="column" rowGap={3}>
                        <Grid container width={widthOfInput}>
                            <Box>
                                <Box sx={{ textAlign: "start" }} >
                                    <CustomLabel variant="body5Medium" color='neutral.80' label="Enter Code" />
                                </Box>
                                <Controller
                                    name="otp"
                                    control={control}
                                    rules={{
                                        required: "OTP is required",
                                        validate: (v) => v.length === 6 || "Enter 6 digits",
                                    }}
                                    render={({ field }) => (
                                        <CustomOtp
                                            placeholder="0"
                                            value={field.value}
                                            onChange={(otp) => setValue("otp", otp, { shouldValidate: true })}
                                            hasError={!!errors.otp}
                                            errorMessage={(errors.otp?.message as string) || ""}
                                        />
                                    )}
                                />
                            </Box>
                        </Grid>
                    </Box>
                    <Grid width={"100%"} height={"38px"}>
                        <Button variant="contained" fullWidth type="submit" loading={false} disabled={!formState.isValid}>
                            Verify OTP
                        </Button>
                            <Box sx={{ color: "#74797B", fontSize: "16px",mt:'12px', textAlign: "left" }}>
                                If you didn’t receive the code?{" "}
                                <Typography onClick={handleResend} variant="body16PX400FW" color='#3274C7' >Resend</Typography> 
                                {timeLeft === 0 ? `` : ` in 00:${timeLeft}`}
                            </Box>
                    </Grid>
                </Grid>
            </form>
        </AuthPage>
    )
}

export default Otp
