import Image from 'next/image'
import React from 'react'
import gd from '../public/img/skill/gd.png'
import wd from '../public/img/skill/wd.png'

const Skills = () => {
  return (
    <div className='mt-5 pt-5'>
      <h1 className='text-center underline text-3xl text-teal-500'>Services I Offer</h1>
      <div className='md:flex flex-row flex-col-2 md:mx-10 gap-5'>
        <div className=' flex flex-col justify-center items-center shadow-lg p-5 md:p-10 text-center my-5 dark:bg-gray-800'>
          <div className='relative h-60 w-60 border-solid border-2 border-teal-500 dark:border-white rounded-full overflow-hidden'>
            <Image src={gd} layout="responsive" alt=""/>
          </div>
          <h1 className='text-2xl text-teal-600 py-5'>Web and Graphics Designs</h1>
          <p className='mb-5 text-gray-500 dark:text-gray-300'>Creating elegant designs suited for your needs following core design theory.</p>
          <p className='text-cyan-600 underline'>Design tools I use</p>
          <ul className='text-left list-disc pl-5 dark:text-white'>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center shadow-lg p-5 md:p-10 text-center my-5 dark:bg-gray-800'>
          <div className='relative w-60 h-60 border-solid border-2 border-teal-500 dark:border-white rounded-full overflow-hidden'>
            <Image src={wd} layout="responsive" alt=""/>
          </div>
          <h1 className='text-2xl text-teal-600 py-5'>Web Developments</h1>
          <p className='mb-5 text-gray-500 dark:text-gray-300'>Do you have an idea for your next great website? Let&apos;s make it a reality.</p>
          <p className='text-cyan-600 underline'>Design tools I use</p>
          <ul className='text-left list-disc pl-5 dark:text-white'>
            <li>HTML5 | CSS | JavaScript</li>
            <li>Sass | Tailwind | MUi5 |Bootstrap</li>
            <li>ReactJS | NextJS | NodeJS</li>
            <li>Redux | Flux | Enzyme | Babel | WebPack</li>
            <li>JEST | Mocha </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills