import footerLogo from '../assets/images/footer_logo.jpg';
import Nav from './Nav';
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";


const Footer = () => {

    return (
        <footer>
            <div className="container">
                <img src={footerLogo} alt="Footer logo" />
                <div className='navigation'>
                    <span>Navigation</span>
                    <Nav/>
                </div>
                <div className='contact'>
                    <span>Contact</span>
                    <span>Chicago, 1540 Park Ave</span>
                    <a href="tel:(312) 555-7575">(312) 555-7575</a>
                    <a href="mailto:info@little.lemon">info@little.lemon</a>
                </div>
                <div className='socials'>
                    <span>Socails</span>
                    <a href="https://instagram.com">
                        <FaInstagram/>
                    </a>
                    <a href="https://x.com">
                        <FaXTwitter/>
                    </a>
                    <a href="https://facebook.com">
                        <FaFacebookF/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;