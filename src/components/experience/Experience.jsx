import React, { useRef } from 'react';
import { motion, useInView, stagger, animate } from 'framer-motion';
import ExperienceText from './ExperienceText';

export const ExperienceData = [
  {
    id: 1,
    titre: "Web Developer",
    societe: "Wheelz",
    date: "since August 2024",
    ville: "Sousse, TUNISIE",
    description: "end-to-end development of a language-learning platform using Next.js, React, TypeScript & Firebase(Auth/Firesore).Built RESTful APIs and responsive UIs with Tailwind CSS, reducing onboarding time by 30%.Managed full lifecycle from functional analysis to deployment (GitHub).",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase","React.js","Redux","Three.js", "Zustand", "Clerk","JavaScript","Firebase(Auth/Firestore)","Express.js","GitHub"]
  },
  {
    id: 2,
    titre: "Front-End Development Intern",
    societe: "Carthago Time and Security Systems",
    date: "Juillet 2023 – Septembre 2023",
    ville: "Sousse, TUNISIE",
    description: "Developed a responsive e-commerce web application using Vue.js for a dynamic frontend experience and Bootstrap for modern, mobile-first UI design.",
    technologies: ["Vue.js", "Bootstrap", "JavaScript", "HTML/CSS"]
  },
  {
    id: 3,
    titre: "End-of-Studies Internship",
    societe: "SAFISOFT",
    date: "Février 2021 – Juin 2021",
    ville: "Sousse, TUNISIE",
    description: "Built a web application using React.js for the frontend and Node.js with MongoDB for the backend.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"]
  },
];

const TimelineDot = ({ index }) => {
  return (
    <div className="absolute left-0 h-full flex justify-center">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#99e7ff] rounded-full z-10"></div>
        {index !== ExperienceData.length - 1 && (
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#112240]"></div>
        )}
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    scale: 1.02,
    backgroundColor: "rgba(20, 20, 30, 0.8)",
    transition: { duration: 0.3 }
  };

  return (
    <motion.div
      ref={ref}
      className="relative pl-12 pb-12 last:pb-0"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <TimelineDot index={index} />
      
      <motion.div
        className="bg-[#112240] bg-opacity-70 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-xl"
        whileHover={hoverEffect}
      >
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{experience.titre}</h3>
            <p className="text-[#99e7ff]">{experience.societe}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[#99e7ff] text-sm">{experience.date}</span>
            <span className="text-gray-400 text-sm">{experience.ville}</span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6">{experience.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="inline-block bg-gray-800 text-[#99e7ff] text-xs px-3 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                delay: index * 0.2 + 0.3 + (techIndex * 0.05),
                type: "spring"
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="experience"
      className="relative py-20  overflow-hidden"
    >
      {/* Animated background elements */}
      {isInView && (
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#99e7ff] rounded-full filter blur-3xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            <ExperienceText/>
          </div>
        </motion.div>

        {/* Timeline with experience cards */}
        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {ExperienceData.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;