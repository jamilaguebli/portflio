
import React from 'react'
import { motion } from 'framer-motion';

const SkillsText = () => {
  return (
    <motion.h1
      style={{
        WebkitTextFillColor: 'transparent',
        WebkitTextStroke: '3px white'
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
     Skills
    </motion.h1>
  )
}

export default SkillsText