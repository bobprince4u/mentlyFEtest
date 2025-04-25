import { motion } from 'framer-motion';
import { AnimatedSection, slideUp } from '../utils/animations';
import React from 'react';
import ProgramsSection from './ProgramsSection';
import GroupCallsSection from './GroupCallsSection';
import ApplicationsSection from './ApplicationsSection';
import MentorsSection from './MentorsSection'; // Ensure the file './MentorsSection.tsx' exists in the components folder
import UsersSection from './UsersSection';
import RecentActivitiesSection from './RecentActivitiesSection';
import MobileNavigation from './MobileNavigation';

export default function Dashboard() {
  console.log({
    ProgramsSection,
    GroupCallsSection,
    ApplicationsSection,
    MentorsSection,
    UsersSection,
    RecentActivitiesSection,
  });

  return (
    <div className="flex-1 overflow-y-auto bg-gray-100 text-white">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center p-4 border-b border-gray-800"
      >
        <div>
          <MobileNavigation />
        </div>
        <div className="flex items-center">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 mx-2"
          >
            🔔
          </motion.button>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-purple-800 rounded-full px-4 py-1 mx-2"
          >
            <div className="bg-purple-500 rounded-full w-8 h-8 mr-2"></div>
            <div className="hidden sm:block">
              <p className="text-xs">Techrity Foundation</p>
              <p className="text-xs text-gray-300">Member</p>
            </div>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 mx-2"
          >
            💬
          </motion.button>
        </div>
      </motion.header>

      <div className="p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-purple-900 text-black-lg p-4 mb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-[8.04px]"
        >
          <div>
            <span className="text-xl font-bold">Welcome Peter Jonathan-Hart 👋</span>
            <p className="text-gray-300">We&apos;re thrilled to have you join Techrity Team!</p>
          </div>
          <div className="flex items-center mt-3 sm:mt-0">
            <span className="mr-4">Timothy Baba</span>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-800 text-white px-4 py-2 rounded-md"
            >
              View Profile
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">

        
          <AnimatedSection className="row-span-2 bg-white rounded-[12.04px] text-black" variant={slideUp} delay={0.1}> 
            <ProgramsSection />
          </AnimatedSection>
          
          <AnimatedSection className="col-span-2" variant={slideUp} delay={0.2}>
            <GroupCallsSection />
          </AnimatedSection>
        
          <AnimatedSection className="row-span-3" variant={slideUp} delay={0.3}>
            <ApplicationsSection />
          </AnimatedSection>

  
            <AnimatedSection className="" variant={slideUp} delay={0.4}>
              <MentorsSection />
            </AnimatedSection>

            <AnimatedSection className="" variant={slideUp} delay={0.5}>
              <UsersSection />
            </AnimatedSection>
          
            <AnimatedSection className="" variant={slideUp} delay={0.6}>
              <RecentActivitiesSection />
            </AnimatedSection>
          
           

        </div>
      </div>
    </div>
  );
}


