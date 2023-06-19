import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { signup } from "../../db";
const url = "https://pear-splendid-bee.cyclic.app/appointment/book";

const Single = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { id, professionalId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(date, time);
    try {
      const data = await signup(url, {
        customerID: localStorage.getItem("id"),
        service: id,
        beautyProfessionalID: professionalId,
        date: date,
        time: time,
        notes: "appointment booked",
      });
      console.log(data);
      // if (data.token) {
      //   navigation("/");
      // }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <p>single page</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <select onChange={(e) => setTime(e.target.value)}>
          <option value="Choose slot">Choose slot</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="1:00 AM">1:00 PM</option>
          <option value="2:00 AM">2:00 AM</option>
          <option value="3:00 AM">3:00 AM</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input type="submit" value="Book Appointment" />
      </form>
    </div>
  );
};

export default Single;
