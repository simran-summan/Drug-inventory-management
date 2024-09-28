import React from "react";
import Navbar from "../NavBar/adminNavbar"; // Assuming this is the admin's navbar
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
