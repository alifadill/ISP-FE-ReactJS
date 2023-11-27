import React from "react";
import { Link } from "react-router-dom"; // Pastikan Anda mengganti ini sesuai dengan cara Anda menangani routing

import "./Login.css"; // Gantilah dengan nama file CSS yang sesuai

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen hero">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Type Username"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Type your password"
            className="input input-bordered w-full"
          />
          <Link to="/register" className="text-blue-400 ">
            Do you have an account?
          </Link>
        </div>

        <button type="button" className="btn btn-primary w-full">
          Login
        </button>
      </div>
    </div>
  );
}
