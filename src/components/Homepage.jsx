import React from 'react'
import homepage from "../assets/homepage.jpg"

function Homepage() {
    return (
        <div>
            <h1 className='font-black uppercase text-3xl my-5'>Camper Life</h1>
            <img className=' rounded-full h-72 2-72 mx-auto my-5' src={homepage} alt={homepage} />
            <p className='font-bold text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus dolor aliquid voluptas deleniti molestiae? Ullam nulla esse corporis voluptatem ut maiores molestiae architecto ipsum nobis aliquam! Incidunt, laboriosam. Eveniet?</p>
            <br />
            <p className='font-bold text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae minima et soluta est! Enim aspernatur, id sed cupiditate repellat labore quos in dicta ipsa. Veniam praesentium totam similique quia iste!</p>
        </div>
    )
}

export default Homepage