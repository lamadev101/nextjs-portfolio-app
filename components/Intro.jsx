import Image from 'next/image'
import React from 'react'
import profile from '../public/img/profile1.png'
import {BsFacebook, BsLinkedin, BsTwitter, BsBehance} from 'react-icons/bs'

const Intro = () => {
  return (
    <div>
      <div className=' text-center mt-2 md:mt-5'>
        <span className='dark:text-teal-400'>HI, There <br /> I&apos;m </span>
        <h1 className=' text-4xl dark:text-white'>Karma Lama Ghising</h1>
        <h3 className=' text-2xl pt-5 dark:text-teal-600'>Developer and Designer</h3>
        <p className=' text-gray-500 dark:text-slate-300 mx-5 px-5 md:leading-8 italic font-thin'>React Developer with hands-on experience in identifying web-based user interactions along with designing &
implementing highly-responsive user interface components by deploying React concepts. Proficient in translating designs &
Wireframes into high-quality code, and writing application interface code via lavascript and ReactJS workflows. Adept at monitoring &
:maintaining frontend performance and troubleshooting & debugging the same to bolster overall performance</p>
      </div>
      <div className=' relative mx-auto bg-gradient-to-t from-teal-400 to-teal-800 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-98 md:w-98'>
        <Image src={profile} objectFit="cover" layout='fill' alt='' />
      </div>
      <div className='text-center mt-5'>
        <span className='text-teal-600 underline dark:text-white'>Get together</span>
      </div>
      <div className='flex flex-row gap-10 justify-center items-center text-3xl'>
        <a href="https://www.linkedin.com/in/karma-lama-0a2237235/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin className='cursor-pointer text-blue-800'/>
        </a>
        <a href="https://www.behance.net/swornimkarma" target="_blank" rel="noopener noreferrer">
          <BsBehance className='cursor-pointer text-blue-500'/>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <BsTwitter className='cursor-pointer text-sky-400'/>
        </a>
        <a href="https://www.facebook.com/lama.kgt.99/" target="_blank" rel="noopener noreferrer">
          <BsFacebook className='cursor-pointer text-blue-600'/>
        </a>
      </div>
    </div>
  )
}

export default Intro