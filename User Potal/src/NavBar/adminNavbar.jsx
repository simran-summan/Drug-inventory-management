import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="h-14 text-xl w-full bg-gray-800 text-white flex justify-center items-center space-x-10">
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
  );
};

export default AdminNavbar;
