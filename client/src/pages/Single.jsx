import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { signup } from "../../db";
// const url = "https://pear-splendid-bee.cyclic.app/appointment/book";
const url = "http://localhost:8000/appointment/book";
import "../Styling/bookslot.css";
import SuccessToast from "../components/toast/SuccessToast";
import ErrorToast from "../components/toast/ErrorToast";
const Single = () => {
  const navigate = useNavigate();
  const [tostMessage, setTostMessage] = useState(null);
  const [errorTostMessage, setErrorTostMessage] = useState(null);
  let userId = JSON.parse(localStorage.getItem("id")) || null;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { id, professionalId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      setErrorTostMessage("Please Login To book Slot");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }

    try {
      const Slotdata = {
        customerID: userId,
        service: id,
        beautyProfessionalID: professionalId,
        date: date,
        time: time,
        notes: "appointment booked",
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(Slotdata),
      });
      const data = await response.json();

      console.log(data);

      if (data.success) {
        setTostMessage("Appointment Booked Successfully");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
      setErrorTostMessage(data.message);
      setTimeout(() => {
        setErrorTostMessage(null);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      {tostMessage && <SuccessToast message={tostMessage} />}
      {errorTostMessage && <ErrorToast message={errorTostMessage} />}
      <h2 className="bookheading">Book Your Slot Here</h2>
      <form className="bookingForm" onSubmit={(e) => handleSubmit(e)}>
        <select
          required
          className="form-control"
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Choose slot</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="1:00 AM">1:00 PM</option>
          <option value="2:00 AM">2:00 AM</option>
          <option value="3:00 AM">3:00 AM</option>
        </select>
        <label> Select Date</label>
        <input
          required
          className="form-control"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          className="form-control"
          type="submit"
          value="Book Appointment"
        />
      </form>
    </div>
  );
};

export default Single;
