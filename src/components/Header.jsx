import React from 'react'
import Navbar from './Navbar'
import CamperLifeLogo from "../assets/CamperLifeLogo.svg"


function Header() {
  return (
    <div className='flex justify-between px-5 sm:px-4 items-center h-1/6 w-full bg-orange-300 border-solid border-b-black border-2'>
      <div className='flex items-center gap-1 h-20'>
        <img className='h-20' src={CamperLifeLogo} alt="CamperLifeLogo" />
        <h1 className='hidden md:block font-black text-2xl'>Camper Life</h1>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  )
}

export default Header