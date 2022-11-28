import React from 'react'
import avatar from '../assets/Avatar.png'

export default function Header() {
    return (
        <header className='rounded-t-md'>
            <img src={avatar} className="avatar-img bg-yellow-100 rounded-t-md" alt="Avatar image" />
        </header>
    )
}