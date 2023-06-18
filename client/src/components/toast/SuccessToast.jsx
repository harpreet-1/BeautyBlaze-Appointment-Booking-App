import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../../Styling/toast/successtoast.css";

const SuccessToast = ({ message }) => {
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
    <div
      className={`toast ${showToast ? "show" : "hide"}`}
      style={{ backgroundColor: "#38a169" }}
    >
      <div className="toast-body">
        <span className="toast-icon">
          <FaCheckCircle />
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

export default SuccessToast;
