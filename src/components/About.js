import React from 'react';
import { motion } from 'framer-motion';
import about from '../assets/about.png';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
        >
          About NxtRole.AI
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          At NxtRole.AI, we believe everyone deserves a clear path to a fulfilling career.
          Our AI-driven platform combines personalized assessments, market-aligned recommendations,
          and step-by-step roadmaps so learners can confidently take their next step.
        </p>
        <motion.img
          src={about}
          alt="about"
          className="mx-auto mt-8 w-64"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}
