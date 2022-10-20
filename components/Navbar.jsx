import Image from 'next/image'
import React from 'react'
import logo from '../public/img/logo.svg'
import {BsFillMoonStarsFill} from 'react-icons/bs';

const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <div className='h-20 md:h-40 flex flex-row justify-between items-center'>
      <div className="relative h-10 w-40 md:h-30 md:w-40">
        <Image src={logo} layout="responsive" className='dark:invert' alt="logo"/>
      </div>
      <div className='flex flex-row gap-5 md:gap-10 justify-center items-center'>
        <BsFillMoonStarsFill className=' cursor-pointer text-2xl dark:text-white' onClick={()=>setDarkMode(!darkMode)} />
        <span className=' bg-gradient-to-t from-teal-400 to-teal-800 p-1 md:p-2 text-white rounded-md cursor-pointer'>Resume</span>
      </div>
    </div>
  )
}

export default Navbar