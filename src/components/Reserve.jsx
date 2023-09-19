import Header from './Header';
import Footer from './Footer';
import ReserveMain from './ReserveMain';
import {fetchAPI,submitAPI} from '../API/apiSimulator';

const Reserve = () => {
    return (
        <>
            <Header/>
            <ReserveMain/>
            <Footer/>
        </>
    );
}

export default Reserve;