import React, { useState } from "react";
import backgroundImage from "../images/image1.png"; // Ensure the image path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data
    console.log("Email:", email);
    console.log("Username:", user);
    console.log("Password:", pass);

    // Reset the form fields
    setEmail("");
    setUser("");
    setPass("");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Dynamically load the background image
      }}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-md border border-gray-400/50 rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-xl font-medium text-white text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
              />
              <span className="absolute inset-y-0 right-4 flex items-center text-gray-200">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
              <span className="absolute inset-y-0 right-4 flex items-center text-gray-200">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-gray-200 focus:outline-none"
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-gray-800 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-200">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
