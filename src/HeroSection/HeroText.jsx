// HeroText.jsx
import React from 'react'
import { motion } from 'framer-motion'
import HeroDescription from './HeroDescription'

const HeroText = () => {
  return (
    <>
      <motion.h1
        className="text-white font-bold text-4xl md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Jamila Guebli
        <br />
        <motion.span
         style={{
          WebkitTextFillColor: 'transparent',
          WebkitTextStroke: '3px #99e7ff'
        }}
        className="font-bold drop-shadow-[1px_1px_2px_rgb(251,163,199,1)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.3, 
          duration: 0.8, 
          ease: [0.16, 0.77, 0.47, 0.97] 
        }}
        > 
          Web Developer
        </motion.span>
      </motion.h1>
      <HeroDescription/>
    </>
  )
}

export default HeroText