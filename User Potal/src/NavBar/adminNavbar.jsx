import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="h-14 text-xl w-full bg-gray-800 text-white flex">
      <div className="flex justify-start py-3 pl-6">
        <Link
          to="/admin-portal/admin-home"
          className="text-2xl text-white font-bold"
        >
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
      <div className="flex justify-end m-1 pr-10">
       <Link to="/login" className=" bg-blue-500 text-white hover:bg-blue-300 hover:text-white px-6 py-1 rounded-lg transition duration-200 font-semibold my-1 text-[17px]">
      Logout 
      </Link> 
      </div>
    </div>
  );
};

export default AdminNavbar;
