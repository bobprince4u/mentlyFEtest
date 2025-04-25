"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="block md:hidden">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="text-white"
      >
        {isOpen ? '✕' : '☰'}
      </motion.button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-14 left-0 right-0 bg-gray-800 p-4 z-50"
        >
          <ul className="space-y-3">
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 rounded">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 rounded">Programs</a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 rounded">Users</a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 rounded">Settings</a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}