import React, { useState } from 'react'
import logo from "../assets/logo.png"
import {navItems} from "../constants" 
import { Menu,X } from 'lucide-react'


const Navbar = () => {
    const [mobiledrawer,setmobiledrawer]=useState(false)

    const togglenavbar = () => {
      setmobiledrawer(!mobiledrawer)
    }

  return (
    <div className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between ">
          <div className="flex items-center flex-shrink-0">
            <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
            <span className="text-lg tracking-tight">VirtulR</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
              {navItems.map((item,index)=>(
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <a  className='px-2 py-3 border rounded-md' href="">
              SignIn
            </a>
            <a className='bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-3 border rounded-md' href="">
              Create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end ">
            <button onClick={togglenavbar}>
                  {mobiledrawer ? <X />: <Menu /> }
            </button>
          </div>
        </div>
        {mobiledrawer &&(
          <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
            <ul>
              {navItems.map((item,index)=>(
                <li key={index} className='py-6'>
                  <a href={item.href}>{item.label}</a>
                </li> 
                ))}
            </ul>
            <div className='flex space-x-6'>
              <a className='px-2 py-3 border rounded-md' href="">SignIn</a>
              <a className='px-2 py-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800' href="">Create an Account</a>
            </div>
          </div>
        )}
        
      </div>
    </div>
  )
}

export default Navbar