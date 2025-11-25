import * as yup from "yup";
import { passwordIsRequired, passwordRegexErrorMsg } from '../forms/validations/errorMessages'
import { passwordRegex} from '../forms/validations/regex'
import {
    emailIsRequired,
    emailRegexErrorMsg,
} from "../forms/validations/errorMessages";
import { emailRegex } from "../forms/validations/regex";



export const setPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required(passwordIsRequired)
    .matches(passwordRegex, passwordRegexErrorMsg),

  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), ''], "Passwords must match"),
});

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().required(emailIsRequired).matches(emailRegex, emailRegexErrorMsg),
});

export const loginSchema = yup.object().shape({
    password: yup.string().required(passwordIsRequired).matches(passwordRegex, passwordRegexErrorMsg),
    email: yup.string().required(emailIsRequired).matches(emailRegex, emailRegexErrorMsg),
});

