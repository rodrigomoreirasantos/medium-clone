import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import mediumLogo from '../../assets/medium-logo.png'

export default function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-5 color-red'>
            <Link href='/'>
                <Image 
                    className='w-44 object-contain'
                    src={mediumLogo} 
                    alt="Logo"
                    width={176}
                />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-5'>
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>Follow</h3>
            </div>
        </div>
        <div className='flex items-center space-x-5 text-green-600'>
            <h3>Sign In</h3>
            <h3 className='border px-4 py-1 rounded-full border-green-600'>Get Started</h3>
        </div>
    </header>
  )
}
