import { useState, useEffect } from "react";
import { BiError } from "react-icons/bi";
import "../../Styling/toast/errortoast.css";

const ErrorToast = ({ message }) => {
  const [showToast, setShowToast] = useState(true);
  const [showWidth, setShowWidth] = useState(100);
  const handleCloseToast = () => {
    setShowToast(false);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    const processInterval = setInterval(() => {
      setShowWidth((prev) => prev - 2.1);
    }, 100);
    return () => {
      clearTimeout(timeout);
      clearInterval(processInterval);
    };
  }, []);

  return (
    <div className={`toast ${showToast ? "show" : "hide"}`}>
      <div className="toast-body">
        <span className="toast-icon">
          <BiError />
        </span>
        <span className="toast-message">{message}</span>
        <button className="toast-close" onClick={handleCloseToast}>
          X
        </button>
      </div>
      <div
        className="toast-progress"
        style={{
          width: `${showWidth}%`,
        }}
      ></div>
    </div>
  );
};

export default ErrorToast;
