import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import SignIn from "../components/user/signIn";
const Signup = () => {
  return (
    <>
      <Meta title={"Sign In"} />
      <BreadCrumb title="Sign In" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <SignIn />
      </Container>
    </>
  );
};

export default Signup;
