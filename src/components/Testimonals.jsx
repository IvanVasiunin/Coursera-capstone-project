import tilly from '../assets/images/tilly.jpg';
import michael from '../assets/images/michael.jpg';
import dan from '../assets/images/dan.jpg';
import julia from '../assets/images/julia.jpg';
import { FaRegStar, FaStar } from "react-icons/fa6";


const Testimonals = () => {
    const testimonals = [
        {
            rating: 4.5,
            name: 'Julia',
            text: 'Great bruchetta',
            img: julia,
        },
        {
            rating: 5.0,
            name: 'Michael',
            text: 'My favorite restaurant!',
            img: michael,
        },
        {
            rating: 4.8,
            name: 'Tilly',
            text: 'Greek salad was amazing!',
            img: tilly,
        },
        {
            rating: 4.6,
            name: 'Dan',
            text: 'Delicious dessert',
            img: dan,
        },
    ];

    return (
        <section className="testimonals">
            <div className="container">
                <h2>Testimonals</h2>
                <div className="testimonals_container">
                    {testimonals.map((item, i) => {
                        return(
                            <div className="testimonal" key={i}>
                                <span>
                                    {item.rating.toFixed(1)} / 5.0
                                    <FaStar/>
                                    <FaRegStar/>
                                </span>
                                <div className="testimonal_user">
                                    <img src={item.img} alt="User's photo" />
                                    <p>{item.name}</p>
                                </div>
                                <p>{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Testimonals;