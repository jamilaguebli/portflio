// HeroImage.jsx
import React from 'react'
import { motion } from 'framer-motion'

const HeroImage = () => {
  return (
    <motion.div
      className='relative h-[250px] w-[250px] md:h-[350px] md:w-[350px]'
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 p-1">
        <motion.img
          src='/image.jpg'
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export default HeroImage