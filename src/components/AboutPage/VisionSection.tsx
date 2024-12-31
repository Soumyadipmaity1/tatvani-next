import { FaLightbulb, FaGlobe, FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const VisionSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="bg-pitch dark:bg-gray-700 text-darkBlue dark:text-pitch rounded-3xl p-10 shadow-2xl transform transition-all duration-300">
      <div className="flex items-center space-x-6 mb-8">
        <div className="bg-darkBlue dark:bg-pitch p-4 rounded-full shadow-inner">
          <FaLightbulb className="text-pitch dark:text-gray-800 text-5xl" />
        </div>
        <h2 className="text-3xl font-bold">Our Vision</h2>
      </div>
      <p className="text-lg mb-8">
        Leading the digital revolution, creating a seamlessly connected world where technology enhances human potential and drives societal progress.
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center">
          <FaGlobe className="text-darkBlue dark:text-pitch text-2xl mr-3" />
          <span>Global Impact</span>
        </div>
        <div className="flex items-center">
          <FaHeart className="text-darkBlue dark:text-pitch text-2xl mr-3" aria-hidden="true" />
          <span>Human-Centric Tech</span>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
