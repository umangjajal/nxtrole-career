import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Contact Us</h2>
        <form className="space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700" />
          <textarea placeholder="Message" className="w-full p-3 rounded-lg border h-32 dark:bg-gray-800 dark:border-gray-700" />
          <button type="button" className="btn-gradient w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
}
