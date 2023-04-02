import React from 'react'
import './Navbar.css'
import NavLinks from './NavLinks'
import {CgMenuRound} from 'react-icons/cg'
import { AiOutlineCloseCircle} from 'react-icons/ai'
import {useState} from 'react'



const Navigation = () => {
    const [open, setOpen] = useState(false)

    const hamburgerIcon = <CgMenuRound className="Hamburger" size="40px" color="white" onClick={()=> setOpen(!open)}/>

    const closeIcon = <AiOutlineCloseCircle className="Hamburger" size="40px" color="white" onClick={()=> setOpen(!open)}/>

    const closeMobileMenu = () => setOpen(false)
    return (
        <nav className="MobileNavigation">
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    )
}

export default Navigation