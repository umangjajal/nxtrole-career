import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: 'Career Recommendations', desc: 'Discover best-fit roles based on your interests and strengths.' },
  { title: 'Course Recommendations', desc: 'Find courses that align with your desired career trajectory.' },
  { title: 'Skill Gap Analysis', desc: 'Identify missing skills and close them with targeted learning.' },
  { title: 'Personalized Roadmap', desc: 'Get a step-by-step plan to reach your dream career.' },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-nxt-blue-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">Key Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-glow hover:-translate-y-1 transition-transform"
            >
              <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
