import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

const HomeHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-gray-800 py-4 px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between">
          <div className="text-white text-lg font-bold">Your Logo</div>
          <button className="md:hidden text-white text-xl" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
        <nav className={`md:flex ${isMenuOpen ? "h-40" : "h-0"} duration-150`}>
          <Link
            to={ROUTES.dashobard}
            className="block md:inline-block mt-4 md:mt-0 text-white mr-4"
          >
            Dashboard
          </Link>
          <Link
            to={ROUTES.home}
            className="block md:inline-block mt-4 md:mt-0 text-white mr-4"
          >
            Home
          </Link>
          <Link
            to={ROUTES.about}
            className="block md:inline-block mt-4 md:mt-0 text-white mr-4"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block md:inline-block mt-4 md:mt-0 text-white"
          >
            Services
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
