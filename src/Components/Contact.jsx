import React from 'react'

const Contact = () => {
  return (
    <div name="contact"
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white p-4'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-800'>Contact</p>
                <p className='py-6'>You can get in touch with me from here</p>
            </div>
            <div className='flex'>
                <form action='https://getform.io/f/abdde8fa-e0d0-4bfe-976c-84ca338bc238'
                method='POST' 
                className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type='text' name='name' placeholder='Enter your name'
                    className='bg-transparent border-2 p-2 rounded-md text-white focus:outline-none'
                    />
                     <input 
                    type='text' name='email' placeholder='Enter your email'
                    className='bg-transparent border-2 my-4 p-2 rounded-md text-white focus:outline-none'
                    />
                    <textarea 
                    name='message' placeholder='Enter your message here..' rows={10} className='bg-transparent border-2 p-2 rounded-md text-white focus:outline-none'
                    />
                    <button
                    className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300'>
                        Connect
                        </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact