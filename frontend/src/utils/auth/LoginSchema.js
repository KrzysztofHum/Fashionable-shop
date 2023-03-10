import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password is too short")
    .max(20, "Password is too long")
    .required("Password is required"),
});

export default LoginSchema;
