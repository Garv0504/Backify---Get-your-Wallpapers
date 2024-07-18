import React from 'react'
import { assets } from '../../assets/assets'
import { IoPersonOutline } from "react-icons/io5";
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={assets.logo} alt="" />
        </div>
        <div className="nav-links">
            <ul>
                <li><a href="">SHOP</a></li>
                <li><a href="">ART</a></li>
                <li><a href="">ATELIER</a></li>
                <li><a href="">ABOUT</a></li>
            </ul>
        </div>
        <div className="profile">
            <ul>
                <li className='icon'>{<IoPersonOutline />}</li>
                <li>|</li>
                <li>CART (0)</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
