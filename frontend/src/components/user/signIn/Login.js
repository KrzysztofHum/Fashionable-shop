import { Link } from "react-router-dom";
import CustomInput from "../../CustomInput";

const Login = ({ onRemindClick }) => {
  const handleLoginClick = () => {
    console.log("Login");
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Login</h3>
            <form action="" className="d-flex flex-column gap-15">
              <CustomInput type="email" name="email" placeholder="Email" />
              <CustomInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <div className="d-flex justify-content-end me-4">
                <Link href="#" className="fs-6" onClick={onRemindClick}>
                  Forgot password?
                </Link>
              </div>
              <div>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button
                    onClick={handleLoginClick}
                    className="button border-0"
                  >
                    Login
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

export default Login;
