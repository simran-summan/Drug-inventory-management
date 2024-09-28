import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Home() {
  return (
    <>
    <nav className='flex justify-end my-3 mr-12 pt-3'>
        <Link to='/signup' className='py-2 px-1 border border-black mx-4'>Sign up</Link>
        <Link to='/login' className='py-2 px-1 border border-black'>Login</Link>
    </nav>
    <div className="flex items-center justify-center h-screen bg-gray-500">
    <h1 className="text-4xl font-bold text-white">Welcome to the Home Page!</h1>
  </div>
  <Outlet/>
    </>
  );
};

export default Home;
