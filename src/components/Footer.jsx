import '../components/Footer.css'

import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return(
        <footer className='footer'>

<div className="footer-container">
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/willenandrade/" target='_blank'><BsLinkedin size={32}/></a>
                </div>
                <div className="github">
                <a href="https://github.com/WillenAndrade" target='_blank'><BsGithub size={32}/></a>
                </div>



            </div>

            <div className="footer-top">
            <h2>Site criado por Willen Andrade &copy;</h2>
            </div>
            
        </footer>
    )
}

export default Footer