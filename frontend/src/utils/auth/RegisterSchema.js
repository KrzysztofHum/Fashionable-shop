import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(6, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  lastname: Yup.string()
    .min(6, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .matches(/^\d{9}$/, "Must be a 9-digit number")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password is too short")
    .max(20, "Password is too long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default RegisterSchema;
