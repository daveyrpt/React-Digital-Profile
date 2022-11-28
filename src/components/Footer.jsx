import React from 'react'
import { AiOutlineTwitter,AiFillFacebook,AiFillGithub } from "react-icons/ai";


export default function Footer() {
    return (
            <nav className='footer flex justify-around text-3xl py-2 rounded-b-md'>
                <a href="https://reactjs.org" target="_blank"><AiOutlineTwitter/></a>
                <a href="https://reactjs.org" target="_blank"><AiFillFacebook/></a>
                <a href="https://reactjs.org" target="_blank"><AiFillGithub/></a>
            </nav>
    )
}