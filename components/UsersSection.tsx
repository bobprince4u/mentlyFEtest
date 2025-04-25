


"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Define AnimatedItem component
const AnimatedItem = ({ children, index }: { children: React.ReactNode; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default function UsersSection() {
  const chartRef = useRef<SVGSVGElement>(null);
  
  // Animation for the chart segments
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (chartRef.current) {
        const segments = chartRef.current.querySelectorAll('circle');
        segments.forEach((segment, index) => {
          setTimeout(() => {
            segment.style.transition = 'stroke-dashoffset 1s ease-in-out';
            segment.style.strokeDashoffset = '0';
          }, index * 300);
        });
      }
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);

  const userStats = [
    { label: "Students", value: 200, color: "gray" },
    { label: "Mentors", value: 8, color: "blue" },
    { label: "Programs", value: 22, color: "green" },
    { label: "Others", value: 10, color: "gray" }
  ];

  return (
    <div className="bg-white rounded-lg p-4 w-full max-w-lg text-black">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium flex items-center">
          <span className="text-gray-400 mr-2">👥</span> Users
        </h2>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-green-700 text-black px-3 py-1 rounded text-sm flex items-center"
        >
          <span>All</span>
          <span className="ml-2">▼</span>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="relative w-full md:w-1/2">
          <div className="w-40 h-40 mx-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full" ref={chartRef}>
              {/* These circles will be animated with JavaScript */}
              <circle cx="50" cy="50" r="40" fill="none" stroke="#374151" strokeWidth="10" strokeDasharray="251" strokeDashoffset="0" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#4338ca" strokeWidth="10" strokeDasharray="251" strokeDashoffset="251" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#2563eb" strokeWidth="10" strokeDasharray="251" strokeDashoffset="251" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#059669" strokeWidth="10" strokeDasharray="251" strokeDashoffset="251" />
            </svg>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="text-3xl font-bold">240</div>
            <div className="text-sm text-gray-400">Users</div>
          </motion.div>
        </div>
        
        {/* Stats container */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-2"
        >
          {userStats.map((stat, index) => (
            <AnimatedItem key={index} index={index}>
              <div className="flex items-center text-sm">
                <span className={`text-${stat.color}-400 text-xs mr-2`}>●</span>
                <span className="flex-1">{stat.label}</span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + (index * 0.2) }}
                  className="font-medium"
                >
                  {stat.value}
                </motion.span>
              </div>
            </AnimatedItem>
          ))}
        </motion.div>
      </div>
    </div>
  );
}