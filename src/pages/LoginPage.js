import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextDatas } from "../context/mycontext";
import { LOGIN_DATA, ROUTES } from "../constants";
import Footer from "../components/Footer";

const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn, email, setEmail } = ContextDatas();
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate(-1);
  }, [isLoggedIn]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    localStorage.setItem(LOGIN_DATA, JSON.stringify(email));
    navigate(ROUTES.dashobard);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-[calc(100vh-56px)]">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Logo</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to={ROUTES.home}
                    className="text-gray-600 hover:text-blue-500 px-2 py-1 rounded"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-600 hover:text-blue-500 px-2 py-1 rounded"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-600 hover:text-blue-500 px-2 py-1 rounded"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-600 hover:text-blue-500 px-2 py-1 rounded"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Login Form */}
          <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required={true}
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  required={true}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </form>
          </div>
        </main> 
      </div> 
    </>
  );
};

export default LoginPage;
