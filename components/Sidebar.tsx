

import React, { useState } from 'react';
import {
  LayoutDashboard,
  ClipboardList,
  RefreshCcw,
  Users,
  MessageSquare,
  DollarSign,
  Trophy,
  BarChart,
  Settings,
  LogOut,
  Info
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Dashboard: <LayoutDashboard className="w-5 h-5" />,
  Programs: <ClipboardList className="w-5 h-5" />,
  Activities: <RefreshCcw className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Forums: <MessageSquare className="w-5 h-5" />,
  Finances: <DollarSign className="w-5 h-5" />,
  Rewards: <Trophy className="w-5 h-5" />,
  Analytics: <BarChart className="w-5 h-5" />,
  Settings: <Settings className="w-5 h-5" />,
  'Log Out': <LogOut className="w-5 h-5" />,
};

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    'Dashboard',
    'Programs',
    'Activities',
    'Users',
    'Forums',
    'Finances',
    'Rewards',
    'Analytics',
    'Settings',
    'Log Out',
  ];

  return (
    <div className="w-56 bg-purple-900 text-white p-4 flex flex-col" role="navigation" aria-label="Main Navigation">
      <div className="flex items-center mb-8">
        <span className="text-gray-300 text-xl font-bold mr-2 flex items-center space-x-1">
          <LayoutDashboard className="w-6 h-6" />
          <span>techrity</span>
        </span>
        <button className="ml-auto text-gray-300" aria-label="Information">
          <Info className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-grow">
        {menuItems.map((name) => (
          <div
            key={name}
            className={`flex items-center p-3 my-1 rounded-lg cursor-pointer ${
              activeItem === name ? 'bg-white text-purple-800' : 'text-gray-300 hover:bg-white/50'
            }`}
            onClick={() => setActiveItem(name)}
            role="button"
            aria-label={`Navigate to ${name}`}
            aria-pressed={activeItem === name}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActiveItem(name);
              }
            }}
          >
            <span className="mr-3" aria-hidden="true">
              {iconMap[name]}
            </span>
            <span>{name}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <div className="bg-purple-400 p-3 rounded-lg text-sm">
          <p className="text-gray-700">Got some questions, enquiries or need help?</p>
          <p
            className="text-purple-700 mt-2 font-medium cursor-pointer"
            role="link"
            tabIndex={0}
          >
            Visit Membership Help Desk
          </p>
        </div>

        <div className="flex items-center justify-between mt-4 px-2">
          <span className="text-xs text-gray-300">Switch to Classic Mode</span>
          <button
            className="w-10 h-5 bg-purple-600 rounded-full relative"
            role="switch"
            aria-checked="true"
            tabIndex={0}
          >
            <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
}

