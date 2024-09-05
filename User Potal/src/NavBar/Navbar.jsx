import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className=" h-10 w-full bg-black text-white flex space-x-96 justify-center">
      <Link className="" to="/Purchase-Medicine">Purchase Medicine</Link>
      <Link to="/Check-Medicine"> Check Medicine</Link>
      <Link to="/Disease-Diagnose"> Disease Diagnose</Link>
    </div>
  );
};

export default Navbar;
