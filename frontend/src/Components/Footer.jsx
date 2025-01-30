import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 min-h-[20vh]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between items-center">
        {/* Left Side - Branding */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <img 
            className="h-12 md:h-16 w-auto object-contain" 
            src={logo} 
            alt="SaptJanm Logo" 
          />
          <h2 className="text-xl font-semibold">SaptJanm</h2>
          <p className="text-sm text-gray-400">Find your perfect match with us.</p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <a 
            href="#" 
            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Right Side - Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-right">
          © {new Date().getFullYear()} SaptJanm. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;