



'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GroupCallsSection() {
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
  
  // Define AnimatedItem component locally
  interface AnimatedItemProps {
    children: React.ReactNode;
    index: number;
  }

  const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, index }) => (
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
      className="w-full"
    >
      {children}
    </motion.div>
  );

  const groupCalls = [
    {
      status: "Ongoing",
      statusColor: "green",
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Wed, Jul 20, 2024",
      time: "9:00 - 11:00 AM",
      group: "Product Study group",
      attendees: 30
    },
    {
      status: "Upcoming",
      statusColor: "blue",
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Wed, Jul 20, 2024",
      time: "9:00 - 11:00 AM",
      group: "Product Study group",
      attendees: 30
    },
    {
      status: "Ongoing",
      statusColor: "green",
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Wed, Jul 20, 2024",
      time: "9:00 - 11:00 AM",
      group: "Product Study group",
      attendees: 30
    }
  ];

  // Function to get the correct status color class
  interface StatusColorClassProps {
    color: string;
  }

  const getStatusColorClass = (color: StatusColorClassProps['color']): string => {
    switch (color) {
      case 'green': return 'text-green-400';
      case 'blue': return 'text-blue-400';
      case 'red': return 'text-red-400';
      case 'yellow': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4 text-black">
        <h2 className="text-lg font-medium flex items-center">
          <span className="text-black mr-2">📞</span> Group Calls
        </h2>
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
          <button className="text-blue-400 text-sm">See all</button>
        </motion.div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {groupCalls.map((call, index) => (
          <AnimatedItem key={index} index={index}>
            <div className="bg-gray-100 rounded-lg p-3 h-full flex flex-col">
              <div className="mb-1">
                <span className={`${getStatusColorClass(call.statusColor)} text-xs flex items-center`}>
                  <span className="mr-1">●</span> {call.status}
                </span>
              </div>
              <h3 className="font-medium text-sm mb-2">{call.title}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center text-xs text-gray-500 mb-2">
                <span className="mb-1 sm:mb-0 sm:mr-3">📅 {call.date}</span>
                <span>🕘 {call.time}</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-xs text-gray-500">👥 {call.group}</span>
                  <span className="bg-gray-600 text-gray-400 text-xs px-2 py-0.5 rounded-full ml-2">
                    {call.attendees}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white text-xs px-3 py-2 rounded-md w-full"
                >
                  View Participants
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white text-xs px-3 py-2 rounded-md w-full hover:bg-purple-700"
                >
                  Join Now
                </motion.button>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </motion.div>
    </div>
  );
}