import React from 'react'
import About from './About/About'
import Call from './Call/Call'
import Careers from './Careers/Careers'
import Clients from './Clients/Clients'
import Cta from './Cta/Cta'
import Portfolio from './Portfolio/Portfolio'
import Testimonials from './Testimonials/Testimonials'

function Home() {
  return (
    <div>
        <Call />
        <About />
        <Testimonials />
        <Cta />
        
        <Careers />
        <Portfolio />
        <Clients />
    </div>
  )
}

export default Home