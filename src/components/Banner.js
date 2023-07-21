import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";

const Banner = () => {
  const hanldeRedirect = useNavigate();
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-[calc(100vh-115px)] md:h-96"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to Our Pets Website
        </h1>
        <p className="text-2xl text-white">Find your perfect pet companion!</p>
        <button
          onClick={() => hanldeRedirect(ROUTES.dashobard)}
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline"
        >
          Explore Pets
        </button>
      </div>
    </div>
  );
};

export default Banner;
