import React from "react";
import LoginComponent from "../components/login/LoginComponent";
import SuccessToast from "../components/toast/SuccessToast";

const Login = () => {
  return (
    <div>
      <LoginComponent />
      <SuccessToast message={"Registered successfully!"} />
    </div>
  );
};

export default Login;
