import ReservationForm from './ReservationForm';

const ReserveMain = () => {
    return (
        <section className='reservation'>
            <div className="container">
            <h2>Reserve the table:</h2>
            <ReservationForm/>
            </div>
        </section>
    );
}

export default ReserveMain;