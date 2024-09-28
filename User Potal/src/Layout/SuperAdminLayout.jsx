import React from "react";
import Navbar from "../NavBar/adminNavbar"; // Assuming this is the admin's navbar
import { Outlet } from "react-router-dom";
import SuperAdminNavbar from "../NavBar/superAdminNavbar";

const SuperAdminLayout = () => {
  return (
    <>
      <SuperAdminNavbar />
      <Outlet />
    </>
  );
};

export default SuperAdminLayout;
