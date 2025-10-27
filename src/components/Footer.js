import React from 'react';
import logo from '../assets/nxtrole.png';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 mt-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side: logo + copyright */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="h-8 w-8" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            © {year} NxtRole.AI — All Rights Reserved
          </span>
        </div>

        {/* Right side: social icons */}
        <div className="flex items-center space-x-5 mt-4 md:mt-0 text-gray-600 dark:text-gray-300">
          <a href="#" aria-label="Twitter" className="hover:text-blue-500 transition-transform transform hover:scale-110">
            <FaTwitter size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-transform transform hover:scale-110">
            <FaLinkedin size={20} />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-black dark:hover:text-white transition-transform transform hover:scale-110">
            <FaGithub size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-transform transform hover:scale-110">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="FaceBook" className="hover:text-pink-500 transition-transform transform hover:scale-110">
            <FaFacebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
