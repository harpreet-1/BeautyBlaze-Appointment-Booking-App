import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
// import "../../Styling/login/login.css";

function SignupComponent() {
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const handlePasswordToggleOne = () => {
    setShowPasswordOne(!showPasswordOne);
  };

  const handlePasswordToggleTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };

  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Create an Account</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="field input-field">
              <input
                type={showPasswordOne ? "text" : "password"}
                placeholder="Create password"
                className="password"
              />
              {showPasswordOne ? (
                <IoEyeOffOutline
                  className="eye-icon"
                  onClick={handlePasswordToggleOne}
                  size={28}
                />
              ) : (
                <IoEyeOutline
                  className="eye-icon"
                  onClick={handlePasswordToggleOne}
                  size={28}
                />
              )}
            </div>
            <div className="field input-field">
              <input
                type={showPasswordTwo ? "text" : "password"}
                placeholder="Confirm password"
                className="password"
              />
              {showPasswordTwo ? (
                <IoEyeOffOutline
                  className="eye-icon"
                  onClick={handlePasswordToggleTwo}
                  size={28}
                />
              ) : (
                <IoEyeOutline
                  className="eye-icon"
                  onClick={handlePasswordToggleTwo}
                  size={28}
                />
              )}
            </div>

            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Already have an account?
              <Link to="/login" className="link login-link">
                Login
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
        <div className="form-link" style={{ textAlign: "left" }}>
          <span>
            <Link to="/professional" className="link login-link">
              Register as professional
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}

export default SignupComponent;
