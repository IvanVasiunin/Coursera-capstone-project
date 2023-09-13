import { Routes, Route, Link } from "react-router-dom";
import Reserve from './Reserve';
import Homepage from './Homepage';

const Nav = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Menu</Link>
                </li>
                <li>
                    <Link to="/reserve">Reservations</Link>
                </li>
                <li>
                    <Link to="/">Order Online</Link>
                </li>
                <li>
                    <Link to="/">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;