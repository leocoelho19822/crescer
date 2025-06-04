import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo_preto.svg';

export default function Footer() {
  return (
    <footer className="bg-[#24406F] text-white  sm:-mt-12 -mt-6">
      <div className="container mx-auto flex flex-col items-center pt-20">
        <img src={logo} alt="Logo" className="h-12 mb-4" />
        <p className="text-sm mb-4">© 2023 Your Company. All rights reserved.</p>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-white hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className="bg-[#1A1A1A] text-center py-4">
        <p className="text-xs text-gray-400">
          Made with ❤️ by Your Company
        </p>
        </div>
    </footer>
  );
}