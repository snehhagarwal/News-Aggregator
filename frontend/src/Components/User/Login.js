import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../API/UserData";
function UserLogin() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    try {
      const res = await getUser({id,password});
      if (res.status === 200) {
        navigate(`/home/${id}`);
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white">User Login</h2>
          <p className="mt-2 text-gray-400">Welcome back! Please log in.</p>
        </div>
        <div className="mt-8 space-y-6">
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <div className="space-y-4">
            <div>
              <label className="text-gray-300 block mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full mt-1 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                value={id}
                onChange={(e) =>
                  setId(e.target.value)
                }
              />
            </div>
            <div>
              <label className="text-gray-300 block mb-2">Password</label>
              <input
                type="password"
                required
                className="w-full mt-1 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-200 ease-in-out transform hover:scale-105"
            disabled={loading}
            onClick={handleLogin}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Forgot your password?{" "}
              <span className="text-blue-500 hover:underline cursor-pointer">
                Reset it here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
