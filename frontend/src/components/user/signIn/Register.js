import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../../features/auth/authSlice";
import { Formik, Form, Field } from "formik";
import RegisterSchema from "../../../utils/auth/RegisterSchema";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      console.log("success");
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, navigate, dispatch]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Sign Up</h3>
            {isError && <div>{message}</div>}
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                mobile: null,
                password: "",
                confirmPassword: "",
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values) => {
                dispatch(register(values));
              }}
            >
              {({ errors, touched }) => (
                <Form className="d-flex flex-column gap-15">
                  <Field
                    className="form-control"
                    name="firstname"
                    type="text"
                    placeholder="First name"
                  />
                  {errors.firstname && touched.firstname && (
                    <div>{errors.firstname}</div>
                  )}
                  <Field
                    className="form-control"
                    name="lastname"
                    type="text"
                    placeholder="Last name"
                  />
                  {errors.lastname && touched.lastname && (
                    <div>{errors.lastname}</div>
                  )}

                  <Field
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  {errors.email && touched.email && <div>{errors.email}</div>}
                  <Field
                    className="form-control"
                    name="mobile"
                    type="text"
                    placeholder="Mobile Number"
                  />
                  {errors.mobile && touched.mobile && (
                    <div>{errors.mobile}</div>
                  )}

                  <Field
                    className="form-control"
                    name="password"
                    type="password"
                    placeholder="Passowrd"
                  />
                  {errors.password && touched.password && (
                    <div>{errors.password}</div>
                  )}

                  <Field
                    className="form-control"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div>{errors.confirmPassword}</div>
                  )}

                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button type="submit" className="button border-0">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
