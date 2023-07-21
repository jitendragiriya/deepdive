import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
      } transition duration-300`}
    >
      <div className="flex items-center justify-between px-4 py-6">
        <Link to={ROUTES.home} className="text-2xl font-bold">Pet Dashboard</Link>
        <button
          className="text-gray-600 focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="px-4 pb-4">
        <ul>
          <li>
            <Link
              to=""
              className="flex items-center py-2 text-gray-700 hover:bg-gray-200"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7-2 2M5 10V3h14v7M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center py-2 text-gray-700 hover:bg-gray-200"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 20h6"
                />
              </svg>
              Pets
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center py-2 text-gray-700 hover:bg-gray-200"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v2m0 8v2m-4-4h2m8 0h2"
                />
              </svg>
              Appointments
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center py-2 text-gray-700 hover:bg-gray-200"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
