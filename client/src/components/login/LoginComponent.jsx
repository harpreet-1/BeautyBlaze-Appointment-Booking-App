import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../../Styling/login/login.css";
import SuccessToast from "../toast/SuccessToast";
import ErrorToast from "../toast/ErrorToast";
const url = "https://pear-splendid-bee.cyclic.app/users/login";

function LoginComponent({ userData, setUserData }) {
  const [showPassword, setShowPassword] = useState(false);
  const [tostMessage, setTostMessage] = useState(null);
  const [errorTostMessage, setErrorTostMessage] = useState(null);
  const navigation = useNavigate();
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(userData),
      });
      const data = await response.json();

      console.log(data);

      if (data.token) {
        setTostMessage("Login Successfull");
        localStorage.setItem("id", JSON.stringify(data.user._id));
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("username", JSON.stringify(data.user.name));
        return setTimeout(() => {
          navigation("/");
        }, 2000);
      }
      setErrorTostMessage(data.message);
      setTimeout(() => {
        setErrorTostMessage(null);
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      {tostMessage && <SuccessToast message={tostMessage} />}
      {errorTostMessage && <ErrorToast message={errorTostMessage} />}
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>Welcome back</header>
            <form onSubmit={(e) => handleLogin(e)} action="#">
              <div className="field input-field">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="input"
                  name="email"
                  value={userData.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="field input-field">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="password"
                  name="password"
                  value={userData.password}
                  onChange={(e) => handleChange(e)}
                />
                {showPassword ? (
                  <IoEyeOffOutline
                    className="eye-icon"
                    onClick={handlePasswordToggle}
                    size={28}
                  />
                ) : (
                  <IoEyeOutline
                    className="eye-icon"
                    onClick={handlePasswordToggle}
                    size={28}
                  />
                )}
              </div>
              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>
              <div className="form-link" style={{ textAlign: "left" }}>
                <label htmlFor="professional-checkbox">
                  <input type="checkbox" id="professional-checkbox" />
                  <span>Login as professional</span>
                </label>
              </div>

              <div className="field button-field">
                <button>Login</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <Link to="/signup" className="link signup-link">
                  Signup
                </Link>
              </span>
            </div>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <a href="#" className="field facebook">
              <BsFacebook className="facebook-icon" />
              <span>Login with Facebook</span>
            </a>
          </div>
          <div className="media-options">
            <a href="#" className="field google">
              <FcGoogle className="google-icon" />
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginComponent;
