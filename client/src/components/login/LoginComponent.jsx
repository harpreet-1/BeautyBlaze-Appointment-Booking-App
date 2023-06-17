import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "../../Styling/login/login.css";

function LoginComponent() {
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className={`container forms ${showSignup ? "show-signup" : ""}`}>
      <div className="form login">
        <div className="form-content">
          <header>Welcome back</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="field input-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="password"
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
  );
}

export default LoginComponent;
