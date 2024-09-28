import { Outlet } from "react-router-dom";

import React from "react";
import UserNavbar from "../NavBar/userNavbar";

const UserLayout = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
    </>
  );
};

export default UserLayout;
