import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { FaUserPlus } from "react-icons/fa";
import "../../Styling/navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let username = JSON.parse(localStorage.getItem("username")) || null;
  const navigation = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigation(`/services?q=${event.target.value}`);
    }
  };

  return (
    <div className="main-div">
      <section className="nav">
        <div>
          <Link to="/" className="logo">
            BeautyBlaze
          </Link>
        </div>

        <div>
          <BsSearch style={{ marginLeft: "5px" }} />

          <input
            type="text"
            placeholder="what are you looking for ?"
            // onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div>
          <ul>
            {" "}
            {!username ? (
              <>
                {" "}
                <li className="icon-align ">
                  <RxAvatar />
                  <Link to="/login">login</Link>
                </li>
                <li className="icon-align ">
                  <FaUserPlus />
                  <Link to="/signup">signup</Link>
                </li>
              </>
            ) : (
              username
            )}
            <li>
              <Link to="/professional" className="professional-btn">
                LIST YOUR BUSINESS
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="nav categories">
        <Link to="/services?q=hair">Hair Salon</Link>
        <Link to="/services?q=barber">Barbershop</Link>
        <Link to="/services?q=nail">Nail Salon</Link>
        <Link to="/services?q=skin">Skin Care</Link>
        <Link to="/services?q=eyebrows"> Eyebrows & Lashes</Link>
        <Link to="/services?q=message">Message</Link>
        <Link to="/services?q=makeup">Makeup Artist</Link>
        <Link to="/services?q=spa">Day Spa</Link>
        <Link to="/services?q=more">More...</Link>
      </section>
    </div>
  );
};

export default Navbar;
