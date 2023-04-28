import logo from './logo.svg';
import './App.css';

import PizzaCheckBox from './Components/PizzaCheckBox';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CheckOut from './Components/CheckOut';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
      <Routes> 
      <Route path="/" element={<PizzaCheckBox />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
