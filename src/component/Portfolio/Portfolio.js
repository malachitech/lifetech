import React from 'react'
import CyberPortfolio from '../Home/Portfolio/Cyber'
import DataPortfolio from '../Home/Portfolio/DataSciencePortfolio'
import MobilePortfolio from '../Home/Portfolio/Mobile'
import UxPortfolio from '../Home/Portfolio/Ux'
import WebDevPortfolio from '../Home/Portfolio/WebDevPortfolio'
import Banner from '../Layout/Banner'

function Portfolio() {
  return (
    <div className='bg-blue-50'>
       <Banner />


      <div className='mx-16'>
        <WebDevPortfolio />
        <DataPortfolio />
        <CyberPortfolio />
        <UxPortfolio />
        <MobilePortfolio />
      </div>
       
    </div>
  )
}

export default Portfolio