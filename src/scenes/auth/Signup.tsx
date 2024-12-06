import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsAuthenticated: (value: boolean) => void;
};

const Signup = ({ setIsAuthenticated }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      // Save user credentials in localStorage
      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Signup successful! You can now log in.");
      navigate("/login"); // Redirect to the login page
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-pink-50 to-white">
      <div className="w-full max-w-md rounded-lg bg-white p-10 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-red-600">
          Sign Up
        </h2>
        <p className="mb-6 text-center text-gray-500">
          Join EvoGym and achieve your fitness goals!
        </p>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring focus:ring-red-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create a password"
            className="mb-6 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring focus:ring-red-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full rounded bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500">
          Already have an account?{" "}
          <span
            className="cursor-pointer font-semibold text-red-600 hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
