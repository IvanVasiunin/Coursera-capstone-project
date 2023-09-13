import footerLogo from '../assets/images/footer_logo.jpg';
import Nav from './Nav';

const Footer = () => {

    return (
        <footer>
            <img src={footerLogo} alt="Footer logo" />
            <div>
                <span>Navigation</span>
                <Nav/>
            </div>
            <div>
                <span>Contact</span>
                <span>Chicago, 1540 Park Ave</span>
                <a href="tel:(312) 555-7575">(312) 555-7575</a>
                <a href="mailto:info@little.lemon">info@little.lemon</a>
            </div>
            <div>
                <span>Socails</span>
                <a href="https://instagram.com">instagram</a>
                <a href="https://x.com">X</a>
                <a href="https://facebook.com">FB</a>
            </div>
        </footer>
    );
}

export default Footer;