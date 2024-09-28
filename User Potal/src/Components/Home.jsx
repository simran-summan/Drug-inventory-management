import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">PharmaScout</h1>
          <div>
            <Link to='/signup' className="text-white hover:text-gray-300 px-4">Sign Up</Link>
            <Link to='/login' className="text-white hover:text-gray-300 px-4">Login</Link>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Welcome to PharmaScout!</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
