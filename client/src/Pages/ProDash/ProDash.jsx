import React from 'react';
import { useLocation } from 'react-router-dom';

function ProDash() {
  const location = useLocation();

  const detail = location.state.detail;
  console.log(detail)
  const appointments = [
    {
      id: 1,
      customerName: 'John Doe',
      status: 'Pending',
      time: '10:00 AM',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      status: 'Ongoing',
      time: '11:30 AM',
    },
    {
      id: 3,
      customerName: 'Mike Johnson',
      status: 'Upcoming',
      time: '2:00 PM',
    },
  ];

  const services = [
    'Haircut',
    'Beard Trim',
    'Shave',
    'Hairstyling',
    'Coloring',
    'Facial',
  ];

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Barber Service Provider</h2>
        <h3>Details:</h3>
        <p>Name: John Doe</p>
        <p>Location: New York</p>
        <p>Contact: +1 1234567890</p>
      </div>
      <div className="main-content">
        <h2>Appointments</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.customerName}</td>
                <td>{appointment.status}</td>
                <td>{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Services</h2>
        <ul>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProDash;
