import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/lifetechlogoremovebg.png'
// import contact from '../Images/contact.png'
import './Navbar.css'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { HiHomeModern } from "react-icons/hi2";
import { FcAbout } from "react-icons/fc";
import { TbListDetails } from "react-icons/tb";
import { RiContactsBookFill } from "react-icons/ri";
// import { FaCertificate } from "react-icons/fa";
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


        
        <div className='lg:hidden flex items-center justify-start text-blue-100 mr-6'>
            <Link to="/dashboard" className='flex items-center justify-start font-bold hover:text-blue-200 hover:bg-blue-900 bg-blue-200 px-6 rounded-md py-4 text-blue-900 h-8 mr-4'>
             <BiLogIn /> &nbsp;Log In
            </Link>
            
            {/* <img src={contact} alt="Learn And Grow With Lifetech" /> */}
            <button onClick={toggleNavbar}><BsFillGrid3X3GapFill className='text-xl' /></button>
        </div>
        

        {/* mobile screen */}

        {navbarOpen && 
            
            <div className='lg:hidden block popuplinks'>
                <div className='popuplinking text-blue-200'>
                    <Link to='/'  onClick={toggleNavbar}><HiHomeModern /> <span>&nbsp;Home</span></Link>
                    <Link to='/about'  onClick={toggleNavbar}><FcAbout /> <span>&nbsp;LifeTech</span></Link>
                    <Link to='/portfolio'  onClick={toggleNavbar}><TbListDetails /> <span>&nbsp;Portfolio</span></Link>
                    <Link to='/contact'  onClick={toggleNavbar}><RiContactsBookFill /> <span>&nbsp;Contact</span></Link>
                    <Link to='/register'  onClick={toggleNavbar}><RiContactsBookFill /> <span>&nbsp;Register</span></Link>
                    <Link to='/dashboard'  onClick={toggleNavbar}><BiLogIn /> <span>&nbsp;Log In</span></Link>
                </div>
                <div className='navbtns'>
                    <Link to='/about' className='bg-gray-600 text-white'  onClick={toggleNavbar}><FcAbout className='text-lg text-blue-900'/> <span>&nbsp;Learn&nbsp;And&nbsp;Earn</span></Link>
                    <Link to='/portfolio' className='bg-blue-100 text-black' onClick={toggleNavbar}><MdWork className='text-lg text-blue-900'/> <span>&nbsp;Employ&nbsp;us</span></Link>
                    <div className='bg-blue-900 text-black'><img className=' text-blue-200' src={logo} alt="Learn And Grow With Lifetech" /></div>
                </div>
            </div>
            

        }

        {/* larger screens */}

        <div className='links w-3/5 hidden lg:flex justify-end items-center'>
            <div className='linking text-blue-200 mr-10'>
                <Link to='/'>Home</Link>
                <Link to='/about'>LifeTech</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/contact'>Register</Link>
                <Link to='/dashboard'>Log In</Link>
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