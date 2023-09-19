import Nav from './Nav';
import logo from '../assets/images/Logo.svg';

const Header = () => {
    return (
        <header>
            <div className="container">
                <img src={logo} alt="Logo" />
                <Nav />
            </div>
        </header>
    );
}

export default Header;