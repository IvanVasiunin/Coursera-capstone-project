import Nav from './Nav';
import logo from '../assets/images/Logo.svg';

const Header = () => {
    
    return (
        <header>
            <img src={logo} alt="Logo" />
            <Nav />
        </header>
    );
}

export default Header;