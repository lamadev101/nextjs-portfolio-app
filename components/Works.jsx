import Image from 'next/image'
import React, { useState } from 'react'
import {works} from '../pages/api/data'
import {BsLink45Deg} from 'react-icons/bs'
import {TbWorldUpload} from 'react-icons/tb'

const Works = () => {
  const [value, setValue] = useState("react");
  const categories = [{key: "vjs", text:"Vanilla JS"}, {key:"next", text: "Next JS"}, {key:"react", text:"React JS"}];
  
  const projects = works.filter(({key})=>{return key === value});

  return (
    <div className='relative my-5 md:my-10 pt-5 z-1'>
      <h1 className=' text-center text-3xl underline text-teal-500'>Portfolio</h1>
      <div className='flex justify-center items-center gap-5 my-5 text-gray-800 dark:text-white'>
        {categories.map((item, idx)=>(
          <span key={idx} className={item.key !== value ? 'border-solid border-2 border-teal-600 rounded-lg px-2 md:px-5 py-1 cursor-pointer hover:bg-teal-500 hover:text-white hover:border-none' : 'border-solid border-2 border-teal-600 bg-teal-600 rounded-lg px-5 py-1 cursor-pointer text-white'} onClick={()=>setValue(item.key)}>{item.text}</span>
        ))}
      </div>
      <div className='flex flex-col justify-center gap-5 md:flex-row lg:flex-wrap containerBox'>
        {projects?.map((project)=>(
          <div className='relative mb-5 text-center overflow-hidden card' key={project.id}>
            <Image src={project.img} layout="responsive" className='transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110' alt=''/>
            <div className=' bg-gray-800 p-5'>
              <h1 className='text-2xl text-teal-500'>{project.title}</h1>
              <p className=' text-gray-400 text-sm font-thin'>{project.desc}</p>
              <div className='flex flex-row justify-between items-center'>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <span className='flex flex-row items-center text-sm cursor-pointer text-cyan-600 underline underline-offset-auto lg:text-xl'><BsLink45Deg/> github.com</span>
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <span className='flex flex-row items-center underline text-sm cursor-pointer text-blue-600 text-underline-offset-auto lg:text-xl'><TbWorldUpload/> https://website.com </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Works