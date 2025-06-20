import React, { useState } from 'react'
import DropdownCurrency from './DropdownCurrency'
import '../styles/Navbar.css' 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="navbar">
      <div className='navbar-content'>
        <button 
        className={`menu-btn ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="logo">
        <p>Logo</p>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#" className='link'>Link</a></li>
          <li><a href="#" className='link'>Link</a></li>
          <li><a href="#" className='link'>Link</a></li>
          <li><a href="#" className='link'>Link</a></li>
          <li><a href="#" className='link'>Link</a></li>
        </ul>
      </div>

      <div className='account'>
        <i className="fas fa-user icon"></i>
        <span className='acc-name'>Account</span>
        <DropdownCurrency />
      </div>
      </div>
    </div>
  )
}

export default Navbar
