import React, { useState } from "react";
import SignupComponent from "../components/signup/SignupComponent";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <>
      <SignupComponent userData={userData} setUserData={setUserData} />
    </>
  );
};

export default Signup;
