import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import logo from '../assets/nxtrole.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3"
        >
          <img src={logo} alt="NxtRole" className="h-10 w-10" />
          <span className="font-bold text-xl text-blue-600 dark:text-blue-400">NxtRole.AI</span>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-6">
          {['home', 'about', 'features', 'contact'].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 capitalize"
            >
              {item}
            </Link>
          ))}
          <a href="#contact" className="btn-gradient dark:text-white">Get Started</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:scale-110 transition"
          >
            {darkMode ? <Sun size={20} color="#FFD700" /> : <Moon size={20} />}
          </button>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 dark:bg-gray-800 border-t"
        >
          <div className="px-4 py-4 flex flex-col space-y-2">
            {['home', 'about', 'features', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => setOpen(false)}
                className="py-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 capitalize"
              >
                {item}
              </Link>
            ))}
            <a href="#contact" className="py-2 btn-gradient text-center text-white rounded-md">
              Get Started
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mt-3 flex items-center space-x-2 justify-center p-2 rounded bg-gray-100 dark:bg-gray-700"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
