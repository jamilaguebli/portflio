// HeroDescription.jsx
import React from 'react'
import { motion } from 'framer-motion'

const description = "Full-Stack Developer with 8 months of hands-on experience in building scalable web applications using React.js, Three.js, Node.js, and modern databases. Skilled in both frontend interactivity (3D graphics, responsive UIs) and backend development (APIs, server logic). Passionate about end-to-end development, performance optimization, and clean architecture.".split(' ');

const HeroDescription = () => {
  return (
    <div className="pt-8">
      <p className='text-white/80 font-medium p-2 text-lg'>
        {description.map((el, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4 + (i / 20),
              duration: 0.2
            }}
          >
            {el}{' '}
          </motion.span>
        ))}
      </p>
    </div>
  )
}

export default HeroDescription