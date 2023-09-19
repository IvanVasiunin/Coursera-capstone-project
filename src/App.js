import './App.css';
import Homepage from './components/Homepage';
import Reserve from './components/Reserve';
import ConfirmedBooking from './components/ConfirmedBooking';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
