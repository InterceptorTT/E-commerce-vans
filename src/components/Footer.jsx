import React from 'react'
import Navbar from './Navbar'
import CamperLifeLogo from "../assets/CamperLifeLogo.svg"


function Footer() {
    return (
        <div className='flex justify-evenly items-baseline w-full cbd bg-slate-300'>
            <div className='flex items-center gap-1 h-20'>
                <h1 className='font-bold text-xl'>Camper Life</h1>
                <p className=' font-medium text-sm'>Copyrights @ 2016</p>
            </div>
            <div className='text-sm font-thin'>
                <Navbar />
            </div>
        </div>
    )
}

export default Footer