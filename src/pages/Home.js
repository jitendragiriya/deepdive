import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import { ROUTES } from "../constants";

const Home = () => {
  return (
    <> 
      <header className="bg-white text-black">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to={ROUTES.login} className="text-2xl font-bold">
            Logo
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to={ROUTES.dashobard} className="hover:text-gray-300">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Banner/>
      <Services/>
    </>
  );
};

export default Home;
