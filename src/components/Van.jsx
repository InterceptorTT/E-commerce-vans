import React from 'react'

function Van({ van }) {
  return (
    <div className='font-bold rounded-xl bg-slate-200 m-5 shadow-amber-900 shadow-lg border-solid border-orange-400 border-2'>
      <img className='rounded-t-xl md:h-1/2 cursor-pointer' src={van.imgUrl} alt={van.imgUrl} />
      <h1 className='font-black capitalize text-xl my-4 cursor-pointer'>{van.name}</h1>
      <div className='py-3 border-solid border-slate-400 border-t-2'>
        <div className='flex justify-evenly items-center text-start py-2'>
          <p className='bg-zinc-200 border-orange-400 border-solid border-2 rounded-xl py-1 px-2 shadow-md shadow-black'>{van.price}$/day</p>
          <p className='bg-zinc-200 border-orange-400 border-solid border-2 rounded-xl py-1 px-2 shadow-md shadow-black'>{van.seats} seats</p>
        </div>
        <div className='flex justify-evenly items-center text-start py-2'>
          <p className='bg-zinc-200 border-orange-400 border-solid border-2 rounded-xl py-1 px-2 shadow-md shadow-black'>year: {van.year}</p>
          <p className='bg-zinc-200 border-orange-400 border-solid border-2 rounded-xl py-1 px-2 shadow-md shadow-black'>{van.vintage ? "Vintage" : "Not Vintage"}</p>
        </div>
        <div className='flex justify-evenly items-baseline text-start py-2'>
          <p className={`${van.qty > 2 ? "text-green-300" : "text-red-500"}bg-orange-300 border-orange-400 border-solid border-2 rounded-xl py-1 px-2`}>Qty: {van.qty}</p>
          <button className='bg-green-500 border-solid border-green-600 border-2 px-2 py-1 rounded-xl shadow-lg shadow-green-800 mb-5 text-white'>Rent it!</button>
        </div>
      </div>
    </div>
  )
}

export default Van