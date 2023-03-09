import { useState } from "react";
import { API_ROUTES } from "../../../const/routes";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: null,
    password: "",
    confirmPassword: "",
  });

  const { firstname, lastname, email, mobile, password, confirmPassword } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(API_ROUTES.REGISTER, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Sign Up</h3>
            <form onSubmit={onSubmit} className="d-flex flex-column gap-15">
              <input
                className="form-control"
                type="text"
                name="firstname"
                placeholder="First name"
                value={firstname}
                onChange={onChange}
                required
              />
              <input
                className="form-control"
                type="text"
                name="lastname"
                placeholder="Last name"
                value={lastname}
                onChange={onChange}
                required
              />
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
                required
              />
              <input
                className="form-control"
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={mobile}
                onChange={onChange}
                required
              />
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
                required
              />
              <input
                className="form-control"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={onChange}
                required
              />
              <div>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button type="submit" className="button border-0">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
