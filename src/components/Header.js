import React from "react";
import { Link } from "react-router-dom";
import { ContextDatas } from "../context/mycontext";
import { LOGIN_DATA, ROUTES } from "../constants";

const Header = ({ isOpen, toggleSidebar }) => {
  const { setIsLoggedIn , setEmail, setPets} = ContextDatas();
  const handleLogout = () => {
    localStorage.removeItem(LOGIN_DATA);
    setIsLoggedIn(false);
    setEmail("")
    setPets([])

  };
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              type="button"
              className="text-gray-500 hover:text-blue-500 focus:outline-none focus:text-blue-500 mr-4"
              onClick={toggleSidebar}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <Link to={ROUTES.home} className="text-xl font-bold text-gray-800">
              Pet Dashboard
            </Link>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-blue-500 focus:bg-white"
              placeholder="Search"
            />
            <button
              className="ml-4 px-4 py-2   bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
