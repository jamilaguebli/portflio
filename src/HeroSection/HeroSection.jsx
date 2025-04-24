// HeroSection.jsx
import React from 'react'
import HeroImage from './HeroImage'
import HeroText from './HeroText'

const HeroSection = () => {
  return (
    <section id="about" className="relative mt-16 lg:mt-0 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-5 xl:px-28 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <HeroImage/>
          </div>

          <div className='order-1 md:order-2 text-center md:text-left mt-12 md:mt-0'>
            <HeroText/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection