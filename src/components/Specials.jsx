import {Link} from "react-router-dom";
import salad from '../assets/images/greek salad.jpg';
import dessert from '../assets/images/lemon dessert.jpg';
import bruchetta from '../assets/images/bruchetta.svg';
import basket from '../assets/images/basket .svg';

const Specials = () => {
    return (
        <section className="specials">
            <div className="specials_top">
                <h2>Specials</h2>
                <Link to="/">Online Menu</Link>
            </div>
            <div className="dishes">
                <div className="dish">
                    <img src={salad} alt="bruchetta" />
                    <div className="specials_name">
                        Greek salad
                        <span>$12.99</span>
                    </div>
                    <p className="specials_text">
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                    </p>
                    <Link to="/">
                        Order a delivery
                        <img src={basket} alt="basket" />
                    </Link>
                </div>
                <div className="dish">
                    <img src={bruchetta} alt="bruchetta" />
                    <div className="specials_name">
                        Greek salad
                        <span>$12.99</span>
                    </div>
                    <p className="specials_text">
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                    </p>
                    <Link to="/">
                        Order a delivery
                        <img src={basket} alt="basket" />
                    </Link>
                </div>
                <div className="dish">
                    <img src={dessert} alt="bruchetta" />
                    <div className="specials_name">
                        Greek salad
                        <span>$12.99</span>
                    </div>
                    <p className="specials_text">
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                    </p>
                    <Link to="/">
                        Order a delivery
                        <img src={basket} alt="basket" />
                    </Link>
                </div>
            </div>

        </section>
    );
}

export default Specials;