import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-div">
      <section className="nav-list">
        <Link to="/">BeautyBlaze</Link>

        <div>
          <Link to="/login">login</Link>

          <Link to="/signup">signup</Link>

          <Link to="/services/:queryName">LIST YOUR BUSINESS</Link>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
