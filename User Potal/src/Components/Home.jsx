import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">PharmaScout</h1>
          <div>
            <Link
              to="/login"
              className="bg-blue-600 text-white hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg transition duration-300 font-semibold my-1 text-[17px]"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center h-[41.6rem] bg-gradient-to-b from-gray-500 to-gray-800">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
          Welcome to PharmaScout!
        </h1>
      </div>

      <Outlet />
    </>
  );
}

export default Home;
