import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { IconContext } from "react-icons/lib";

export default function Content() {
    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <div className="content flex flex-col items-center bg-slate-200">
                <p className='text-large mt-5'>Davey Rupert</p>
                <p className='text-sm text-orange-400'>Software Engineer</p>
                <a href='https://daveyrpt.github.io/portfolio/' className='text-xs my-3 text-gray-500'>https://daveyrpt.github.io/portfolio/</a>
                <div className='flex flex-row'>
                    <button className='bg-white px-6 ml-8 mr-4 h-9 flex flex-row items-center drop-shadow-lg'>
                        <div className='mr-2'>
                        <AiOutlineMail />
                        </div>
                        <p>Email</p>
                    </button>
                    <button className='bg-blue-400 px-3 mr-8 h-9 flex flex-row items-center text-white drop-shadow-lg'>
                        <div className='mx-2'>
                        <ImLinkedin />
                        </div>
                        <p>LinkedIn</p>
                    </button>
                </div>
                <div className=' mx-8 mt-5'>
                    <p className='text-large mb-1'>About</p>
                    <p className='text-small'>I am a fullstack developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className=' mx-8 mt-4'>
                    <p className='text-large mb-1'>Interests</p>
                    <p className='text-small'>Game expert. Movie lover. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. <strike>Coffee</strike> fanatic.</p>
                </div>
            </div>
        </IconContext.Provider>
    )
}