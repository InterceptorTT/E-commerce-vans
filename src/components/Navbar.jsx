import React from 'react';
import hamburger from "../assets/more.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul className='hidden sm:flex md:justify-evenly gap-5 items-baseline font-extrabold'>
        <Link to="/" className='hidden md:block'>Homepage</Link>
        <Link to="/OurVans">Our vans</Link>
        <li>Rent you van</li>
        <li>About us</li>
        <li>Contacts</li>
      </ul>
      <div className='block sm:hidden'>
        <img src={hamburger} alt={hamburger} />
      </div>
    </div>
  )
}

export default Navbar