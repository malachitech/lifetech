import React from 'react'
import {Routes, Route} from 'react-router'
import Layout from './component/Layout/Layout'
import AboutScreen from './component/screens/AboutScreen'
import ContactScreen from './component/screens/ContactScreen'
import HomeScreen from './component/screens/HomeScreen'
import PortfolioScreen from './component/screens/PortfolioScreen'

function Router() {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Layout><HomeScreen /></Layout>} />
            <Route path='/about' element={<Layout><AboutScreen /></Layout>} />
            <Route path='/portfolio' element={<Layout><PortfolioScreen /></Layout>} />
            <Route path='/contact' element={<Layout><ContactScreen /></Layout>} />
        </Routes>
        
    </div>
  )
}

export default Router