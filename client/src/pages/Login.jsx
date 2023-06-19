import React, { useState } from "react";
import LoginComponent from "../components/login/LoginComponent";
import SuccessToast from "../components/toast/SuccessToast";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <LoginComponent userData={userData} setUserData={setUserData} />
      {/* <SuccessToast message={"Registered successfully!"} /> */}
    </div>
  );
};

export default Login;
