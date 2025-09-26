import React from 'react'
import AboutBanner from '../../components/aboutPageComponent/AboutBanner'
import AboutHome from '../../components/aboutPageComponent/AboutHome'

export default function About() {
  return (
    <div className='bg-black'>
      <AboutBanner />
      <AboutHome/>
    </div>
  )
}
