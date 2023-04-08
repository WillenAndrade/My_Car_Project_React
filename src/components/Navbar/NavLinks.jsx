import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

const NavLinks = ({isMobile, closeMobileMenu}) => {
    return(
        <ul className="menu">
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} onClick={()=>isMobile && closeMobileMenu()}><a className='login'>LOGIN</a></motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.10}} onClick={()=>isMobile && closeMobileMenu()}><a>HOME</a></motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.20}} onClick={()=>isMobile && closeMobileMenu()}><a>ABOUT</a></motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.30}} onClick={()=>isMobile && closeMobileMenu()}><a>CONTACTS</a></motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.40}} onClick={()=>isMobile && closeMobileMenu()}><a className='news'>NEWSLETTER</a></motion.li>
        </ul>
    )
}

export default NavLinks