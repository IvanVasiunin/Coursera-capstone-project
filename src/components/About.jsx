import chef from '../assets/images/restaurant_chef.jpg';
import restaurant from '../assets/images/restaurant.jpg';
import {useRef} from 'react';

const About = () => {
    const img1 = useRef();
    const img2 = useRef();
    const bg1 = useRef();
    const bg2 = useRef();

    const handleMouseOver = () => {
        bg1.current.style.zIndex = 1;
        img1.current.style.zIndex = 0;
        bg2.current.style.zIndex = 2;
        img2.current.style.zIndex = 3;
    }

    const handleMouseBack = () => {
        bg1.current.style.zIndex = 2;
        img1.current.style.zIndex = 3;
        bg2.current.style.zIndex = 1;
        img2.current.style.zIndex = 0;
    }

    return (
        <section className="about">
            <div className="container">
                <div className="text">
                    <p className="about_name">Little Lemon</p>
                    <p className="about_place">Chicago</p>
                    <p className="about_text">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                </div>
                <div className="images">
                    <div ref={bg1} onMouseOver={handleMouseBack} className="restaurant_hide"></div>
                    <img ref={img1} src={chef} alt="Chiefs" />
                    <div ref={bg2} onMouseOver={handleMouseOver} className="chefs_hide"></div>
                    <img ref={img2} src={restaurant} alt="restaurant" />
                </div>
            </div>
        </section>
    );
}

export default About;