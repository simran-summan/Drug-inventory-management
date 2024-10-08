import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // React Router's navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    // Simulate login
    if (email === "user@email.com" && password === "user") {
      navigate("/user-portal/user-home");
    } else if (email === "admin@email.com" && password === "admin") {
      navigate("/admin-portal/admin-home");
    } else if (email === "superadmin@email.com" && password === "superadmin") {
      navigate("/superadmin-portal/superadmin-home");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-500 to-gray-800">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-700">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-600">
              Email
            </label>
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
            <label className="block mb-2 text-sm font-semibold text-gray-600">
              Password
            </label>
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
            className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 duration-200"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?
            <button
              className="ml-2 text-blue-600 hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
