import React from 'react'
import About from './About/About'
import Call from './Call/Call'
import Careers from './Careers/Careers'
import Cta from './Cta/Cta'
import Portfolio from './Portfolio/Portfolio'

function Home() {
  return (
    <div>
        <Call />
        <About />
        <Cta />
        <Careers />
        <Portfolio />
    </div>
  )
}

export default Home