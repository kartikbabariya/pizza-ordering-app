import logo from './logo.svg';
import './App.css';

import PizzaCheckBox from './Components/PizzaCheckBox';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowIngredients from './Components/ShowIngredients';
import DeliveryForm from './Components/DeliveryForm';
import MainPage from './Components/MainPage';
import PizzaCustomizationPage from './Components/PizzaCustomizationPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/CustomizePage" element={<PizzaCustomizationPage />} />
          <Route path="/ShowIngredients" element={<ShowIngredients />} />
          <Route path="/order" element={<DeliveryForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
