import './App.css';
import Homepage from './components/Homepage';
import Reserve from './components/Reserve';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
