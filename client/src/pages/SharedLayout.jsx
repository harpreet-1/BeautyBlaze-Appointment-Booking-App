import React from "react";
import Navbar from "../components/home/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/home/Footer";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
