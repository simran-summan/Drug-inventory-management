import React from "react";
import { Link } from "react-router-dom";

const SuperAdminNavbar = () => {
    console.log("suoeradmin");
    
  return (
    <div className="h-14 text-xl w-full bg-gray-800 text-white flex">
      <div className="flex justify-start py-3 pl-6">
       <Link to="/superadmin-portal/superadmin-home">
      PharmaScout      
      </Link> 
      </div>
      <div className="w-full flex justify-center text-center items-center space-x-10">
      <Link to="/superadmin-portal/orders" className="hover:text-gray-300">
        Order
      </Link>
      <Link to="/superadmin-portal/requests" className="hover:text-gray-300">
        Request
      </Link>
      <Link to="/superadmin-portal/inventory" className="hover:text-gray-300">
        Inventory
      </Link>
      <Link to="/superadmin-portal/SOS" className="hover:text-gray-300">
        SOS
      </Link>
      </div>
      <div className="flex justify-end py-3 pr-20 ">
       <Link to="/login" className="border-2 border-white rounded-md px-3 bg-slate-300 text-black text-lg hover:bg-slate-100 duration-200">
      Logout 
      </Link> 
      </div>
    </div>
  );
};

export default SuperAdminNavbar;
