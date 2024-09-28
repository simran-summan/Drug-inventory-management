import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="h-14 text-xl w-full bg-gray-800 text-white flex">
      <div className="flex justify-start py-3 pl-6">
      <Link to='/admin-portal/admin-home'>
      PharmaScout      
      </Link>
      </div>
      <div className="w-full flex justify-center text-center items-center space-x-10">

      <Link to="/admin-portal/orders" className="hover:text-gray-300">
        Order
      </Link>
      <Link to="/admin-portal/requests" className="hover:text-gray-300">
        Request
      </Link>
      <Link to="/admin-portal/inventory" className="hover:text-gray-300">
        Inventory
      </Link>
      <Link to="/admin-portal/SOS" className="hover:text-gray-300">
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

export default AdminNavbar;
