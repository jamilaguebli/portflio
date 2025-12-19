// HeroDescription.jsx

import { motion } from 'framer-motion'

const description = "I am a passionate Fullstack Developer with experience in React.js, Next.js, Vue.js, and Node.js. I build modern, responsive, and scalable web applications, focusing on clean and efficient code. I enjoy solving problems, learning new technologies, and delivering seamless user experiences across both front-end and back-end development.".split(' ');

const HeroDescription = () => {
  return (
    <div className="pt-8">
      <p className='p-2 text-lg font-medium text-white/80'>
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