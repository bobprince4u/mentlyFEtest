
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProgramsSection() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const AnimatedItem: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            delay: index * 0.1
          }
        }
      }}
    >
      {children}
    </motion.div>
  );

  const programs = [
    {
      title: "Fundamentals of User Interface & Experience",
      isPopular: true,
      description: "This program is a hands-on guide designed for designers who want to level-up their understanding of UI/UX.",
      members: "200+ Members",
      host: null
    },
    {
      title: "Colour Hack Practical Group Call",
      isPopular: false,
      description: "This program is a hands-on guide designed for designers who want to level-up their understanding and confidently apply it.",
      members: null,
      host: "Faith Mash"
    },
    {
      title: "Colour Hack Practical Group Call",
      isPopular: false,
      description: "This program is a hands-on guide designed for designers who want to level-up their understanding and confidently apply it.",
      members: null,
      host: "Jeff"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-4 min-h-screen sm:min-h-0">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
        <h2 className="text-lg font-medium flex items-center">
          <span className="text-gray-400 mr-2">📂</span> Programs
        </h2>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <button className="text-blue-400 text-sm">See all</button>
        </motion.div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row justify-end sm:items-center items-start text-xs mb-8 gap-2">
        <span className="mr-0 sm:mr-4">Filter</span>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-gray-300 px-3 py-1 rounded flex items-center"
        >
          <span>Active</span>
          <span className="ml-2">▼</span>
        </motion.div>
      </div>

      {/* Program Cards */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {programs.map((program, index) => (
          <AnimatedItem key={index} index={index}>
            <div className="bg-white rounded-lg p-4 border-2 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                <h3 className="font-semibold text-base">{program.title}</h3>
                {program.isPopular && (
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded self-start sm:self-auto"
                  >
                    Popular
                  </motion.div>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-4">{program.description}</p>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                {program.members ? (
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-gray-700"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-gray-700"></div>
                    </div>
                    <span className="text-xs text-gray-400 ml-2">{program.members}</span>
                  </div>
                ) : program.host ? (
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-500 mr-2"></div>
                    <span className="text-xs text-gray-400">Hosted by: {program.host}</span>
                  </div>
                ) : null}

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-600 text-white text-xs px-3 py-2 rounded-md w-full sm:w-auto"
                  >
                    View Details
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 text-white text-xs px-3 py-2 rounded-md hover:bg-purple-700 w-full sm:w-auto"
                  >
                    {index === 0 ? "Register" : index === 1 ? "Enroll" : "Apply Now!"}
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
