import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {

    return (
        <>
            <Header/>
            <div className="confirmation_block">
                <div className="container">
                    <div className="confirmation_message">
                        <p>Thank you for your reservation!</p>
                        <p>We look forward to seeing you in our restaurant.</p>
                        <Link to='/'>Back to main page</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ConfirmedBooking;