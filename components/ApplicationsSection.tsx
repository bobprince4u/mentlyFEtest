


'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ApplicationsSection() {
  const applications = [
    { name: "Maxwell Smith", email: "maxwellsmith@gmail.com" },
    { name: "Adeoti Samuel", email: "adeotisamuel@gmail.com" },
    { name: "Maxwell Smith", email: "maxwellsmith@gmail.com" },
    { name: "Adeoti Samuel", email: "adeotisamuel@gmail.com" },
    { name: "Maxwell Smith", email: "maxwellsmith@gmail.com" }
  ];

  // Define animation variants here instead of importing them
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  // AnimatedItem component defined locally
  const AnimatedItem: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => (
    <motion.div
      variants={itemVariant}
      custom={index}
      className="w-full"
    >
      {children}
    </motion.div>
  );

  return (
    <div className="bg-white rounded-lg p-4 text-black h-[732px]">
      <div className="flex justify-between items-center mb-12 text-black">
        <h2 className="text-lg font-medium flex items-center">
          <span className="text-black mr-2">📝</span> Applications
        </h2>
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
          <button className="text-blue-400 text-sm">See all</button>
        </motion.div>
      </div>

      <div className="text-xs text-gray-400 mb-2">Mentors</div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-3"
      >
        {applications.map((app, index) => (
          <AnimatedItem key={index} index={index}>
            <div className="bg-white p-3 h-24 rounded-xl border-b-2 text-base">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <motion.input 
                    whileHover={{ scale: 1.2 }}
                    type="checkbox" 
                    className="mr-3" 
                  />
                  <div className="w-8 h-8 bg-gray-500 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-medium">{app.name}</h4>
                    <p className="text-xs text-gray-400">{app.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "#fee2e2" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-200 text-red-400 text-xs px-3 py-1 rounded-md"
                  >
                    Reject
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "#f3e8ff" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 text-white text-xs px-3 py-1 rounded-md"
                  >
                    Accept
                  </motion.button>
                </div>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </motion.div>
    </div>
  );
}