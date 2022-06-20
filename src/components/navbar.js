import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa'

import './NavbarStyle.css'

function Navbar() {
  return (
    <div className="navbar">
       <div className="logo">
          <h2>PARADISE</h2>
       </div>
       <ul className="nav-menu">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>Book</li>
          <li>Views</li>
       </ul>
       <div className="nav-icons">
          <BiSearch className="icon"/>
          <BsPerson className="icon"/>
       </div>
       <div className="hamburger">
          <HiOutlineMenuAlt4 className="icon" />
       </div>
       <div className="mobile-menu">
         <ul className="mobile-nav">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>Book</li>
            <li>Views</li>
         </ul>
         <div className="mobile-menu-bottom">
           <div className="menu-icons">
              <button>Search</button>
              <button>Account</button>
           </div>
           <div className="social-icons">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaTwitter className="icon" />
              <FaPinterest className="icon" />
              <FaYoutube className="icon" />
           </div>
         </div>
       </div>
    </div>
  )
}

export default Navbar