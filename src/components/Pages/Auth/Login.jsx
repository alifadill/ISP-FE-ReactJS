import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const API_URL = "http://127.0.0.1:8000/api/users"; // Replace with your actual API URL

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Create a payload with the user credentials
    const payload = {
      email: email, // Use email instead of username
      password: password,
    };

    // Make a POST request to the API for user authentication
    fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response from the server
        console.log("Login response:", data);

        // You can add logic here to handle successful login or display error messages
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen hero">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email" // Change htmlFor to "email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Type Email"
            value={email}
            onChange={handleEmailChange}
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
            value={password}
            onChange={handlePasswordChange}
            className="input input-bordered w-full"
          />
          <Link to="/register" className="text-blue-400 mb-4 mt-2">
            Register
          </Link>
        </div>

        <button
          type="button"
          className="btn btn-primary w-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
