"use client";

import React, { useState, useEffect } from 'react';
import { FaRocket, FaChartLine, FaHandshake } from 'react-icons/fa';

interface MissionItem {
  icon: React.ElementType;
  text: string;
}

const missionItems: readonly MissionItem[] = [
  { icon: FaChartLine, text: 'Drive Growth' },
  { icon: FaHandshake, text: 'Foster Partnerships' },
] as const;

const MissionSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="bg-darkBlue dark:bg-gray-800 text-pitch dark:text-pitch rounded-3xl p-10 shadow-2xl transition-all duration-300">
      <div className="flex items-center space-x-6 mb-8">
        <div className="bg-pitch dark:bg-pitch p-4 rounded-full shadow-inner">
          <FaRocket className="text-darkBlue dark:text-gray-800 text-5xl" />
        </div>
        <h2 className="text-3xl font-bold">Our Mission</h2>
      </div>
      <p className="text-lg mb-8">
        Empowering digital innovation through cutting-edge solutions, bridging technology and human needs for a brighter future.
      </p>
      <div className="grid grid-cols-2 gap-6">
        {missionItems.map(({ icon: Icon, text }, index) => (
          <div key={index} className="flex items-center">
            <Icon className="text-pitch dark:text-pitch text-2xl mr-3" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
