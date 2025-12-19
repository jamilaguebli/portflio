import  { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectText from './ProjectText';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "Showcase Website for GCL E-Learning Platform",
    description: "E-learning platform showcase using React.js and Tailwind CSS, transforming Figma designs into a fully responsive and optimized website that improved load times by 40% while maintaining pixel-perfect accuracy and accessibility compliance.",
    image: "/gcl.png",
    tags: ["React", "Tailwind CSS", "Figma"],
    link: "https://gcl-hazel.vercel.app/",
    github: "https://github.com/jamilaguebli/GCL",
    color: "bg-[#112240]"
  },
  {
    id: 2,
    title: "Donatello",
    description: "A Next.js/TypeScript education platform with blockchain rewards. Uses React, Tailwind CSS, Clerk (auth), Drizzle (DB), and shadcn UI for interactive learning. Incentivizes users with crypto/NFTs for completing courses.",
    image: "/donatello.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Clerk", "Drizzle", "shadcn UI"],
    link: "https://donatello-qkfultma9-jamilas-projects-42771f9a.vercel.app/",
    github: "https://github.com/jamilaguebli/donatello",
    color: "bg-[#112240]"
  },
  {
    id: 3,
    title: "Showcase Website for Travel Beyond",
    description: "Modern travel agency website built with React.js and Tailwind CSS, fully responsive and optimized for performance. Implements EmailJS for contact form submissions and i18next for multi-language support (Arabic, French, English). Features top destinations, travel packages, and client reviews, providing users with a smooth, engaging, and multilingual experience.",
    image: "https://sumfinity.com/wp-content/uploads/2025/03/Museum-Of-The-Future-at-Night-1638x2048.jpg",
    tags: ["React", "emailjs", "Tailwind CSS", "JavaScript", "i18next"],
    link: "https://beyond-ochre.vercel.app/",
    github: "https://github.com/jamilaguebli/beyond",
    color: "bg-[#112240]"
  },
  {
    id: 4,
    title: "Jobs",
    description: "Conception et développement de la partie front d'une application web permettant aux utilisateurs de chercher et trouver des emplois.",
    image: "/jobs.png",
    tags: ["TypeScript", "Next", "Tailwind CSS", "Clerk"],
    link: "https://jobdemo-eight.vercel.app/",
    github: "https://github.com/jamilaguebli/Job",
    color: "bg-[#112240]"
  },
];

const ProjectCard = ({ project, 
  index,
   activeCard, 
   setActiveCard }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 50 : -50, 0]);

  return (
    <motion.div
      ref={cardRef}
      className={`relative h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer`}
      onClick={() => setActiveCard(project.id)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      style={{ y }}
      layout
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 z-10`} />
      
      {/* Image with parallax effect */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ scale: 1.2 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="object-cover w-full h-full"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end h-full p-4 sm:p-6 md:p-8">
        <motion.div
          className="mb-3 sm:mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h3 
            className="mb-1 text-lg font-bold text-white sm:text-xl md:text-2xl lg:text-3xl md:mb-2 line-clamp-2"
            whileHover={{ x: 5 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="mb-3 text-xs text-gray-200 sm:text-sm md:text-base sm:mb-4 md:mb-6 line-clamp-2 sm:line-clamp-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeCard === project.id ? 1 : 0.8 }}
          >
            {project.description}
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-2 mb-3 sm:mb-4 md:mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.tags.map((tag, i) => (
            <motion.span 
              key={i} 
              className="text-[10px] sm:text-xs bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[#99e7ff]"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-col gap-2 xs:flex-row sm:gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href={project.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#99e7ff] hover:bg-[#88d6ee] text-white px-3 sm:px-4 py-2 sm:py-2.5 md:px-5 md:py-3 rounded-full text-xs sm:text-sm font-medium md:font-bold transition-colors"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            View project <FiExternalLink className="text-xs sm:text-sm" />
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-[#99e7ff] text-white px-3 sm:px-4 py-2 sm:py-2.5 md:px-5 md:py-3 rounded-full text-xs sm:text-sm font-medium md:font-bold transition-colors"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Code <FiGithub className="text-xs sm:text-sm" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  return (
    <motion.section 
      id="projects" 
      className="relative py-20 overflow-hidden sm:py-28 md:py-32"
      ref={containerRef}
    >
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              transition: {
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6">
        {/* Header with animated text */}
        <div className="mb-16 text-center sm:mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6"
          >
            <ProjectText />
          </motion.div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;