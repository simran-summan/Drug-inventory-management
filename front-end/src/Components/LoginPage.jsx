import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // React Router's navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Simulating login success
      console.log('Logging in with:', { email, password });
      if (email === 'sim@gmail.com' && password === '1234') {
        navigate('/home'); // Redirect to Home Page after successful login
      } else {
        alert('Invalid login credentials');
      }
    } else {
      // Handle sign-up logic here
      console.log('Signing up with:', { name, email, password });
      navigate('/home'); // Redirect after successful sign-up
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-600">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-700">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-600">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
                placeholder="Enter your name"
              />
            </div>
          )}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-gray-500 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-200"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button
              className="ml-2 text-blue-600 hover:underline"
              onClick={() => {
                setIsLogin(!isLogin);
                setName('');
                setEmail('');
                setPassword('');
              }}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
