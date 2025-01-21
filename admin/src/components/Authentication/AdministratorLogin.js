import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdministratorLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.email && formData.password) {
        navigate("/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-2xl p-8  transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white">
            Admin Login
          </h2>
          <p className="mt-2 text-gray-400">
            Welcome back! Please login to your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div className="space-y-4">
            <div>
              <label className="text-gray-300 block mb-2">Email</label>
              <input
                id="email"
                type="email"
                required
                className="w-full mt-1 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="password" className="text-gray-300 block mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full mt-1 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-200 ease-in-out transform hover:scale-105"
          >
            Sign in
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Forgot your password?{" "}
              <span className="text-blue-500 hover:underline cursor-pointer">
                Reset it here
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdministratorLogin;
