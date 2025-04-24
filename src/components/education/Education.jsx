import React from 'react'
import EducationText from './EductionText'
import { motion } from 'framer-motion'

export const educations = [
    {
        id: 1,
        title: "Computer Science Baccalaureate",
        date: "2017-2018",
        location: "Kesra High School - Siliana, Tunisia"
    },
    {
        id: 2,
        title: "Applied License in Network Technology",
        date: "2020-2021",
        location: "ISMAIK - Kairouan, Tunisia"
    },
    {
        id: 3,
        title: "1st Professional Master's in Systems and Network Administration and Security",
        date: "2021-2022",
        location: "ISMAIK - Kairouan, Tunisia"
    },
    {
        id: 4,
        title: "Introduction to Web Development Training",
        date: "November 2022-January 2023",
        location: "GOMYCODE - Sousse, Tunisia"
    },
    {
        id: 5,
        title: "Front-End with React JS Training",
        date: "January 2023-May 2023",
        location: "GOMYCODE - Sousse, Tunisia"
    },
    {
        id: 6,
        title: "Back-End with Node JS Training",
        date: "June 2023-August 2023",
        location: "GOMYCODE - Sousse, Tunisia"
    }
]

const Education = () => {
  return (
    <section id="education" className="relative  py-20 lg:py-36"> 
      <div className="container mx-auto px-4">
        <div className="text-center text-4xl md:text-6xl lg:text-7xl mb-12">
          <EducationText/>
        </div>

        {/* Centered cards container */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {educations.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="bg-[#112240] p-6 rounded-xl border-l-4 border-[#99e7ff] shadow-lg hover:shadow-[#99e7ff]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-[#99e7ff] text-[#0a192f] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    {edu.id}
                  </div>
                  <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                </div>
                <div className="pl-11">
                  <p className="text-[#ccd6f6] mb-2">
                    <span className="text-[#99e7ff] font-mono">Date: </span>
                    {edu.date}
                  </p>
                  <p className="text-[#8892b0]">
                    <span className="text-[#99e7ff] font-mono">Location: </span>
                    {edu.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education