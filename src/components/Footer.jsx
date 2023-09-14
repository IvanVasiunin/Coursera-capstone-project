import footerLogo from '../assets/images/footer_logo.jpg';
import Nav from './Nav';

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
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://x.com">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="https://facebook.com">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;