import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import ErrorToast from "../toast/ErrorToast";
import SuccessToast from "../toast/SuccessToast";

const url = "https://pear-splendid-bee.cyclic.app/users/register";
function SignupComponent({ userData, setUserData }) {
  const navigation = useNavigate();
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [success, setSuccess] = useState(false);
  const [toastKey, setToastKey] = useState(0);
  const [successKey, setSuccessKey] = useState(0);
  const [ifUserExists, setIfUserExists] = useState(false);
  const handlePasswordToggleOne = () => {
    setShowPasswordOne(!showPasswordOne);
  };

  const handlePasswordToggleTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setPasswordMismatch(false);
    setSuccess(false);
    setIfUserExists(false);
    if (userData.password !== userData.confirmPassword) {
      setPasswordMismatch(true);
    } else {
      try {
        const { confirmPassword, ...actualData } = userData;

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(userData),
        });
        const data = await response.json();

        console.log(data);
        if (data.message.includes("registered successfully")) {
          setSuccess(true);
          setTimeout(() => {
            navigation("/login");
          }, 2000);
        } else if (data.message.includes("Email already registered")) {
          setIfUserExists(true);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    setToastKey((prevKey) => prevKey + 1);
    setSuccessKey((prevKey) => prevKey + 1);
  };

  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Create an Account</header>
          <form onSubmit={(e) => handleSignup(e)} action="#">
            <div className="field input-field">
              <input
                required
                type="text"
                placeholder="name"
                className="input"
                name="name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="field input-field">
              <input
                required
                type="email"
                placeholder="Email"
                className="input"
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="field input-field">
              <input
                required
                type={showPasswordOne ? "text" : "password"}
                placeholder="Create password"
                className="password"
                name="password"
                onChange={(e) => handleChange(e)}
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
                required
                type={showPasswordTwo ? "text" : "password"}
                placeholder="Confirm password"
                className="password"
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
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
      {passwordMismatch && (
        <ErrorToast key={toastKey} message={"password do not match!"} />
      )}
      {success && (
        <SuccessToast key={successKey} message={"registered successfully!"} />
      )}
      {ifUserExists && (
        <ErrorToast key={toastKey} message={"User already registered!"} />
      )}
    </section>
  );
}

export default SignupComponent;
