import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextDatas } from "../context/mycontext";
import { ROUTES } from "../constants";
import HomeHeader from "../components/HomeHeader";
import axios from "axios";

const RegisterPage = () => {
  const { isLoggedIn, setIsLoggedIn, email, setEmail } = ContextDatas();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

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

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "your_api_url",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="bg-gray-100 min-h-[calc(100vh-56px)]">
        <HomeHeader />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Login Form */}
          <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e?.target?.value)}
                  required={true}
                  minLength={3}
                  maxLength={30}
                />
              </div>
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
                  minLength={6}
                  maxLength={30}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
              <div className="mt-4">
                Already have an account?
                <Link to={ROUTES.login} className="text-blue-500 ml-2">
                  login
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default RegisterPage;
