import chef from '../assets/images/restaurant_chef.jpg';
import restaurant from '../assets/images/restaurant.jpg';

const About = () => {
    return (
        <section className="about">
            <div className="text">
                <p className="about_name">Little Lemon</p>
                <p className="about_place">Chicago</p>
                <p className="about_text">
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
            </div>
            <div className="images">
                <img src={chef} alt="Chiefs" />
                <img src={restaurant} alt="restaurant" />
            </div>
        </section>
    );
}

export default About;