import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../public/img/logo.svg'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {FaSun} from 'react-icons/fa';

const Navbar = ({darkMode, setDarkMode}) => {
  const [dark, setDark] = useState(true);
  const handleDarkMode = ()=>{
    setDarkMode(true);
    setDark(false);
  }
  const handleLightMode = ()=>{
    setDarkMode(false);
    setDark(true);
  }
  return (
    <div className='h-20 flex flex-row justify-between items-center sticky top-0 z-999'>
      <div className="relative h-10 w-40 md:h-30 md:w-40">
        <Image src={logo} layout="responsive" className='dark:invert' alt="logo"/>
      </div>
      <div className='flex flex-row gap-5 md:gap-10 justify-center items-center'>
        {dark ? <BsFillMoonStarsFill className=' cursor-pointer text-2xl dark:text-white' onClick={handleDarkMode} /> :
        <FaSun className=' cursor-pointer text-2xl dark:text-white' onClick={handleLightMode}/>}
        <span className=' bg-gradient-to-t from-teal-400 to-teal-800 p-1 md:p-2 text-white rounded-md cursor-pointer'>Resume</span>
      </div>
    </div>
  )
}

export default Navbar