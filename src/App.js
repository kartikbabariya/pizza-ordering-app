import logo from './logo.svg';
import './App.css';

import PizzaCheckBox from './Components/PizzaCheckBox';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShowIngredients from './Components/ShowIngredients';
import DeliveryForm from './Components/DeliveryForm';

function App() {
  return (
  <BrowserRouter>
      <Routes> 
      <Route path="/" element={<PizzaCheckBox />} />
        <Route path="/ShowIngredients" element={<ShowIngredients />} />
        <Route path="/order" element={<DeliveryForm />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
