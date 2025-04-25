

'use client';

import React from 'react';

export default function RecentActivitiesSection() {
  const activities = [
    {
      icon: "🔍",
      bgColor: "bg-yellow-500",
      title: "KYC Verification",
      description: "10 new members just signed up on Monthly.",
      time: "23 minutes ago"
    },
    {
      icon: "👋",
      bgColor: "bg-blue-500",
      title: "New User Sign Up!",
      description: "45 new members just signed up on Monthly.",
      time: "52 minutes ago"
    },
    {
      icon: "💰",
      bgColor: "bg-green-500",
      title: "Withdrawal Request",
      description: "Maridan requested a withdrawal.",
      time: "25 minutes ago"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-4 w-[425px] h-5/6">
      <div className="flex justify-between items-center mb-8 text-black">
        <h2 className="text-lg font-medium flex items-center">
          <span className="mr-2">📊</span> Recent Activities
        </h2>
        <div className="group cursor-pointer">
          <button className="text-blue-400 text-sm group-hover:underline">See all</button>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="transition-all duration-300 hover:translate-x-1">
            <div className="flex">
              <div className="mr-3">
                <div
                  className={`w-10 h-10 ${activity.bgColor} rounded-lg flex items-center justify-center text-xl hover:scale-105 transition-transform duration-200`}
                >
                  {activity.icon}
                </div>
              </div>
              <div>
                <h4 className="font-medium">{activity.title}</h4>
                <p className="text-xs text-gray-400">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}