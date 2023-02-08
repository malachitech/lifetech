import React from 'react'
import About from '../Home/About/About'
import Clients from '../Home/Clients/Clients'
import CyberSecurity from './CyberSecurity/CyberSecurity'
import DataScience from './DataScience/DataScience'
import MobileAppScience from './MobileApp/MobileApp'
import UserExperience from './UserExperience/UserExperience'
import WebSerice from './WebService/WebSerice'



function AboutUs() {
  return (
    <div>
        <About />
        <WebSerice />
        <DataScience />
        <CyberSecurity />
        <UserExperience />
        <MobileAppScience />
        <Clients />
    </div>
  )
}

export default AboutUs