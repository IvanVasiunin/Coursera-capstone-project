import main_img from "../assets/images/restauranfood.jpg";
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero_text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/reserve">Reserve a Table</Link>
            </div>
            <img src={main_img} alt="main_img" />
        </section>
    );
}

export default Hero;