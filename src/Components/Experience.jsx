import React from 'react';
import html from '../assets/html.png';
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwind.png"
// import { FaGithub } from "react-icons/fa";

const Experience = () => {

  const images=[
    {
      id:1,
      src:html,
      title:"HTML",
      style:"shadow-orange-500"
    },
    {
      id:2,
      src:css,
      title:"CSS",
      style:"shadow-blue-600"
    },
    {
      id:3,
      src:js,
      title:"Javascript",
      style:"shadow-yellow-500"
    },
    {
      id:4,
      src:react,
      title:"React js",
      style:"shadow-cyan-400"
    },
    {
      id:5,
      src:tailwind,
      title:"Tailwind",
      style:"shadow-sky-500"
    },
    // {
    //   id:6,
    //   src:<FaGithub className='bg-white'/>,
    //   title:"Github",
    //   style:"shadow-white-500 "
    // },
    
  ]

  return (
    <div name="experience"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-800'>Experience</p>
                <p className='py-6'>Technologies in which I have worked</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 py-8 sm:px-0'>

              {images.map(({id,src,style,title})=>(

              <div 
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Experience