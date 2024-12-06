import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsAuthenticated: (value: boolean) => void;
};

const Login = ({ setIsAuthenticated }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    // Check if the credentials match
    if (email === storedUser.email && password === storedUser.password) {
      setIsAuthenticated(true);
      navigate("/"); // Redirect to the main page
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-pink-50 to-white">
      <div className="w-full max-w-md rounded-lg bg-white p-10 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-red-600">
          Login
        </h2>
        <p className="mb-6 text-center text-gray-500">
          Welcome back to EvoGym! Please log in to continue.
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring focus:ring-red-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="mb-6 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring focus:ring-red-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full rounded bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500">
          Don't have an account?{" "}
          <span
            className="cursor-pointer font-semibold text-red-600 hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
