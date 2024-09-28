import React from "react";
import { Link } from "react-router-dom";


const UserNavbar = () => {
  return (
    <div className=" h-14 text-xl w-full bg-black text-white flex space-x-96 justify-center items-center">
      <Link className="" to="/user-portal/Purchase-Medicine">Purchase Medicine</Link>
      <Link to="/user-portal/Check-Medicine"> Check Medicine</Link>
      <Link to="/user-portal/Disease-Diagnosis"> Disease Diagnosis</Link>
    </div>
  );
};

export default UserNavbar;
