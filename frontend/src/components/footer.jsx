import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">© 2023 Hotel Management System</p>
        <p className="mb-2">
          <Link to="/privacy-policy" className="text-white hover:underline">
            Privacy Policy
          </Link>
        </p>
        <p>
          <Link to="/terms-of-service" className="text-white hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;