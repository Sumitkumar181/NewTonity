import React from 'react'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import Success from './Success'
import ShowServices from './ShowServices'
import AboutSection from './AboutSection'
import TechnologySection from './TechnologySection'

export default function HomeMain() {
  return (
      <div>
      <HeroSection />
      <ServicesSection />
      <Success />
      <ShowServices />
      {/* <AboutSection /> */}
      <TechnologySection/>
    </div>
  )
}
