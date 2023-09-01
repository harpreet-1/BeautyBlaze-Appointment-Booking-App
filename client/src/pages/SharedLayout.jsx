import React from "react";
import Navbar from "../components/home/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/home/Footer";
import NavScrollExample from "../components/home/NavScrollExample";

const SharedLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NavScrollExample />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
