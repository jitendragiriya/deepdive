import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-4">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          onClick={() => navigate(ROUTES.home)}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
