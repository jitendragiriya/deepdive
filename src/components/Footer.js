import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 px-6 md:px-12 text-white text-center">
      &copy; {new Date().getFullYear()} Dog Services. All rights reserved.
    </footer>
  );
};

export default Footer;
