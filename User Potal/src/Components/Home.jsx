import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Home() {
  return (
    <>
    <nav>
        <Link to='/signup'>Sign up</Link>
        <Link to='/login'>Login</Link>
    </nav>
    <div className="flex items-center justify-center h-screen bg-gray-500">
    <h1 className="text-4xl font-bold text-white">Welcome to the Home Page!</h1>
  </div>
  <Outlet/>
    </>
  );
};

export default Home;
