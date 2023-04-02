import React from 'react'
import './Navbar.css'

import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const Navbar = () => {
    return (
        <div className="navbar-header">
          <div className="navbar">
            <h2 className='logo'>LOGO XD</h2>
            <Navigation />
            <MobileNavigation />
           </div>
           <div className="line"></div>
        </div>
    )
}

export default Navbar