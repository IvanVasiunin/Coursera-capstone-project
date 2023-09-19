import {useState, useReducer, useEffect} from 'react';
import ReservationForm from './ReservationForm';
import { fetchAPI } from '../API/apiSimulator';

const ReserveMain = () => {

    const updateTimes = async (state, action) => {
        switch (action.type) {
            case 'update_times':
                const response = await fetchAPI(action.date);
                const times = await response;
                console.log(times)
                return times;
            default:
              return state;
        }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, []);


    useEffect(() => {
        const initializeTimes = async () => {
            const todayDate = new Date();
            const dateString = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1 > 10 ? todayDate.getMonth() + 1 : '0' + (todayDate.getMonth() + 1)}-${todayDate.getDate() > 10 ? todayDate.getDate() : '0' + todayDate.getDate()}`;
            dispatch({ type: 'update_times', date: dateString });
        }
        initializeTimes();
    }, [])


    return (
        <section className='reservation'>
            <div className="container">
                <h2>Reserve the table:</h2>
                <ReservationForm availableTimes={availableTimes} updateTimes={dispatch}/>
            </div>
        </section>
    );
}

export default ReserveMain;