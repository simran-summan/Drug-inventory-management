import  { Outlet } from "react-router-dom";

import Navbar from "../NavBar/Navbar";
import React from "react";
import Home from "../Components/Home";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
