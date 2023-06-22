import React from 'react'
import { Link } from 'react-router-dom'

import img from '../images/mango-star.png';
import './Navbar.css'

const Navbar = () => (
  <nav className='navbar'>
    <h1><Link to='/'> <img className='brand-img' src={img}/>  </Link></h1>
    <ul className="list">
      <li className='item'><Link to='/menu'>Menu</Link></li>
      <li className='item'><Link to='/about'>About</Link></li>
    </ul>
  </nav>
)

export default Navbar
