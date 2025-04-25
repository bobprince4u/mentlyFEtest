
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, AnimatedItem } from '../utils/animations';

export default function MentorsSection() {
  const mentors = [
    { name: "Maxwell Smith", role: "Product Designer", showMessageButton: true },
    { name: "Adeoti Samuel", role: "Product Designer", showMessageButton: true },
    { name: "Joshua", role: "Product Designer", showMessageButton: false }
  ];

  return (
    <div className="bg-white rounded-lg p-4 h-[470px] border-2">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-medium flex items-center text-black">
          <span className=" mr-2">👨‍🏫</span> Mentors
        </h2>
        <div className="flex items-center space-x-2">
          <motion.button whileHover={{ scale: 1.1 }} className="text-gray-400 text-lg">ⓘ</motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="text-gray-400 text-lg">⋯</motion.button>
        </div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-3"
      >
        {mentors.map((mentor, index) => (
          <AnimatedItem key={index} index={index} className="">
            <div className="bg-white rounded-lg p-3 flex justify-between items-center text-black border-b-2">
              <div className="flex items-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gray-500 rounded-full mr-3"
                ></motion.div>
                <div>
                  <h4 className="font-medium">{mentor.name}</h4>
                  <p className="text-xs text-gray-400">{mentor.role}</p>
                </div>
              </div>
              {mentor.showMessageButton && (
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "#9333ea" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white text-xs px-3 py-1 rounded-md"
                >
                  Message
                </motion.button>
              )}
            </div>
          </AnimatedItem>
        ))}
      </motion.div>
      
      <div className="mt-8 text-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className=" bg-red-200 hover:bg-red-300 text-sm text-white rounded-lg px-12 py-2 border-2"
        >
          See all
        </motion.button>
      </div>
    </div>
  );
}