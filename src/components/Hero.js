import React from 'react';
import { motion } from 'framer-motion';
import work from '../assets/Working on Progress.png';
export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-nxt-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            NxtRole.AI – Career Guidance & Roadmap Generator
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            AI-powered platform that helps students and professionals find the right career path,
            discover job roles, and learn skills to grow.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="#features" className="btn-gradient">Explore Now</a>
            <a href="#contact" className="py-2 px-4 border rounded-lg hover:shadow">Contact Us</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <img src={work} alt="hero" className="w-80 md:w-[400px]" />
        </motion.div>
      </div>
    </section>
  );
}
