import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-header">
          <div className="navbar">
            <h2 className='logo'>LOGO XD</h2>
            <ul className="menu">
                <li><a className='login'>LOGIN</a></li>
                <li><a>HOME</a></li>
                <li><a>ABOUT</a></li>
                <li><a>CONTACTS</a></li>
                <li><a className='news'>NEWSLETTER</a></li>
            </ul>
           </div>
           <div className="line"></div>
        </div>
    )
}

export default Navbar