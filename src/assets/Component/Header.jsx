import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { SiBloglovin } from "react-icons/si"

const Header = ({ isAuthenticated = false }) => {

  const dispatch = useDispatch();



  return (

    <>
      <nav className='flex justify-between items-center h-[4rem] shadow-md text-white bg-[#292950]'>
        <div className='ml-2 text-2xl font-Raleway font-bold flex'>
          <SiBloglovin />
          <p>LOG</p>
        </div>
        {isAuthenticated ?
          <ul className='flex gap-x-4 sm:gap-x-7 md:gap-12 mr-4 cursor-pointer font-Roboto text-xl ' >
            <li ><Link to='/'>Blog</Link></li>
            <li><Link to='/me'>Profile</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          :
          <ul className='flex gap-x-4 sm:gap-x-7 md:gap-12 mr-4 cursor-pointer text-lg '>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>SignUp</Link></li>
          </ul>
        }
      </nav>
    </>
  )
}

export default Header