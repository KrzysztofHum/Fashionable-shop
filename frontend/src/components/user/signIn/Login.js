import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, reset } from "../../../features/auth/authSlice";
import LoginSchema from "../../../utils/auth/LoginSchema";

const Login = ({ onRemindClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, navigate, dispatch]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Login</h3>
            {isError && <div>{message}</div>}
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                dispatch(login(values));
              }}
            >
              {({ errors, touched }) => (
                <Form className="d-flex flex-column gap-15">
                  <Field
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  {errors.email && touched.email && <div>{errors.email}</div>}
                  <Field
                    className="form-control"
                    name="password"
                    type="password"
                    placeholder="Passowrd"
                  />
                  {errors.password && touched.password && (
                    <div>{errors.password}</div>
                  )}
                  <div className="d-flex justify-content-end me-4">
                    <Link href="#" className="fs-6" onClick={onRemindClick}>
                      Forgot password?
                    </Link>
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button type="submit" className="button border-0">
                        Login
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

export default Login;
