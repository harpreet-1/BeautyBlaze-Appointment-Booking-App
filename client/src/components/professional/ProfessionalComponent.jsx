import { useState } from "react";
import "../../Styling/professional/professional.css";
function ProfessionalComponent() {
  const [professionalInput, setProfessionalInput] = useState({
    businessName: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    profilePicture: "",
    phone: "",
    address: "",
  });

  const handleInput = (e) => {
    setProfessionalInput({
      ...professionalInput,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="professional-container">
        <div>
          <header>Register your business</header>
          <form>
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Business name"
                  name="businessName"
                  value={professionalInput.businessName}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  value={professionalInput.name}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="About service"
                  name="bio"
                  value={professionalInput.bio}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="phone number"
                  name="phone"
                  value={professionalInput.phone}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="address"
                  name="address"
                  value={professionalInput.address}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="fx" style={{ marginTop: "20px" }}>
                <label htmlFor="imageUpload">Upload Image:</label>
                <input
                  type="file"
                  id="imageUpload"
                  name="profilePicture"
                  accept="image/*"
                  value={professionalInput.profilePicture}
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>

            <div>
              <div>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  value={professionalInput.email}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="create password"
                  name="password"
                  value={professionalInput.password}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="confirm password"
                  name="confirmPassword"
                  value={professionalInput.confirmPassword}
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
          </form>
          <button className="register-business">Register your business</button>
        </div>
      </div>
    </>
  );
}

export default ProfessionalComponent;
