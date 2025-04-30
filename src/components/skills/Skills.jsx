import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillsText from './SkillsText';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillsData = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 70 },
      { name: 'JavaScript', level: 70 },
      { name: 'Tailwind', level: 95 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Vue.js', level: 70 },
      { name: 'Bootstrap', level: 75 },
      { name: 'Redux', level: 70 },
      { name: 'Zustand', level: 70 },
      { name: 'Three.js', level: 40 },
      { name: 'Clerk', level: 70 }
    ],
    backend: [
      { name: 'Node.js', level: 60 },
      { name: 'Express', level: 60 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Firebase', level: 75 },
      { name: 'Drizzle', level: 65 }
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'VS Code', level: 95 },
    
    ]
  };

  const CircularProgress = ({ percentage }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    const strokeColor = '#99e7ff';

    return (
      <div className="relative w-24 h-24 flex items-center justify-center mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="8"
            stroke="rgba(255, 255, 255, 0.1)"
            fill="transparent"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="8"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              stroke: strokeColor,
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%'
            }}
          />
        </svg>
        <motion.div 
          className="absolute text-white font-bold text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {percentage}%
        </motion.div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center mb-16 w-full">
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <SkillsText/>
            </div>
          </div>
        </div>

        {/* Onglets */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gray-800 rounded-full opacity-30"></div>
            <div className="relative flex space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-full p-1 shadow-lg border border-gray-700">
              {Object.keys(skillsData).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10 ${
                    activeCategory === category
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  {activeCategory === category && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#99e7ff] rounded-full -z-10"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grille de compétences */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-5xl">
            {skillsData[activeCategory].map((skill) => (
              <motion.div 
                key={`${activeCategory}-${skill.name}`} 
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <CircularProgress percentage={skill.level} />
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="mt-4 text-center font-medium">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;