import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/lifetechlogoremovebg.png'
import contact from '../Images/contact.png'
import './Navbar.css'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { HiHomeModern } from "react-icons/hi2";
import { FcAbout } from "react-icons/fc";
import { TbListDetails } from "react-icons/tb";
import { RiContactsBookFill } from "react-icons/ri";
import { FaCertificate } from "react-icons/fa";
import { MdWork } from "react-icons/md";


function Navbar() {

    const [navbarOpen, setnavbarOpen] = useState(false)

    const toggleNavbar = () => {
        setnavbarOpen(prev => !prev)
    }

  return (
    <div className='navbar flex justify-between items-center'>

        
        <div className='logoContainer'>
            <img className='logo text-blue-200' src={logo} alt="Learn And Grow With Lifetech" />
            
        </div>


        
        <div className='md:hidden flex items-center justify-items-start text-blue-100 mr-6'>
            <img className='text-blue-200 h-8 mr-4' src={contact} alt="Learn And Grow With Lifetech" />
            <button onClick={toggleNavbar}><BsFillGrid3X3GapFill className='text-xl' /></button>
        </div>
        

        {/* mobile screen */}

        {navbarOpen && 
            
            <div className='md:hidden block popuplinks'>
                <div className='popuplinking text-blue-200'>
                    <Link to='/'><HiHomeModern /> <span>&nbsp;Home</span></Link>
                    <Link to='/about'><FcAbout /> <span>&nbsp;LifeTech</span></Link>
                    <Link to='/portfolio'><TbListDetails /> <span>&nbsp;Portfolio</span></Link>
                    <Link to='/contact'><RiContactsBookFill /> <span>&nbsp;Contact</span></Link>
                </div>
                <div className='navbtns'>
                    <Link to='/about' className='bg-gray-600 text-white'><FaCertificate className='text-lg text-blue-900'/> <span>&nbsp;Learn&nbsp;And&nbsp;Earn</span></Link>
                    <Link to='/portfolio' className='bg-blue-100 text-black'><MdWork className='text-lg text-blue-900'/> <span>&nbsp;Employ&nbsp;us</span></Link>
                    <div to='/portfolio' className='bg-blue-900 text-black'><img className=' text-blue-200' src={logo} alt="Learn And Grow With Lifetech" /></div>
                </div>
            </div>
            

        }

        {/* larger screens */}

        <div className='links w-3/5 hidden md:flex justify-end items-center'>
            <div className='linking text-blue-200 mr-10'>
                <Link to='/'>Home</Link>
                <Link to='/about'>LifeTech</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className='navbtns mr-5'>
                <Link to='/about' className='bg-gray-600 text-white'>Learn&nbsp;And&nbsp;Earn</Link>
                <Link to='/portfolio' className='bg-blue-100 text-black'>Employ&nbsp;us</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar