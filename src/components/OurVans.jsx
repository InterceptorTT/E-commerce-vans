import React, { useState,useEffect } from 'react'
import Van from "./Van"

function OurVans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/allVans")
      .then((res) => res.json())
      .then((data) => setVans(data))
      .catch((error) => console.error(error))
  }, [])


  return (
    <>
      <div className='flex flex-col mt-8'>
        <h1 className='capitalize font-black text-2xl'>Our Vans</h1>
        <p className='px-10 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quam earum tempore repellat odit, commodi eum vel rem quo unde accusamus veritatis fuga cupiditate alias dolorum quod voluptatum voluptatem iste.</p>
      </div>
      <div className='grid grid-cols-1 w-full sm:grid-cols-2 gap-3'>
        {vans && vans.map((van) => {
          return (
            <Van
              key={van._id}
              van={van}
            />
          )
        })}
      </div>
    </>
  )
}

export default OurVans