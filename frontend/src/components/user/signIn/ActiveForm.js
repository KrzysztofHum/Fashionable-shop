import { useState } from "react";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Remind from "./Remind";

const AvtiveForm = () => {
  const [currentForm, setCurrentForm] = useState("LOGIN");

  if (currentForm === "REMIND") {
    return (
      <>
        <Remind />
        <Footer>
          <div className="d-flex align-items-center">
            <p className="m-0 fs-5">Have you forgotten your password ?</p>
            <button
              className="button-2 border-0"
              onClick={() => setCurrentForm("LOGIN")}
            >
              Go back to login
            </button>
          </div>
        </Footer>
      </>
    );
  }

  if (currentForm === "LOGIN") {
    return (
      <>
        <Login
          onRemindClick={() => {
            setCurrentForm("REMIND");
          }}
        />
        <Footer>
          <div className="d-flex align-items-center">
            <p className="m-0 fs-5">Don't have an account yet?</p>
            <button
              className="button-2 border-0"
              onClick={() => setCurrentForm("REGISTER")}
            >
              Create new Account
            </button>
          </div>
        </Footer>
      </>
    );
  }

  if (currentForm === "REGISTER") {
    return (
      <>
        <Register
          onLoginClick={() => {
            setCurrentForm("LOGIN");
          }}
        />
        <Footer>
          <div className="d-flex align-items-center">
            <p className="m-0 fs-5">Have you already an account?</p>
            <button
              className="button-2 border-0"
              onClick={() => setCurrentForm("LOGIN")}
            >
              Log in to your account
            </button>
          </div>
        </Footer>
      </>
    );
  }
};

export default AvtiveForm;
