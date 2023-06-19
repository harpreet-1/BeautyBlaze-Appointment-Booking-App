import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import ErrorToast from "../toast/ErrorToast";
// import SuccessToast from "../toast/SuccessToast";
import { signup } from "../../../db";
import "../../Styling/login/login.css";
const url = "https://pear-splendid-bee.cyclic.app/users/login";

function LoginComponent({ userData, setUserData }) {
  const [showPassword, setShowPassword] = useState(false);
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
      const data = await signup(url, userData);
      console.log(data);
      localStorage.setItem("id", JSON.stringify(data.user._id));
      if (data.token) {
        navigation("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Welcome back</header>
          <form action="#">
            <div className="field input-field">
              <input
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
              <button onClick={(e) => handleLogin(e)}>Login</button>
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
  );
}

export default LoginComponent;
