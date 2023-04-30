import logo from './logo.svg';
import './App.css';

import PizzaCheckBox from './Components/PizzaCheckBox';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SelectedIngredients from './Components/SelectedIngredients';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
      <Routes> 
      <Route path="/" element={<PizzaCheckBox />} />
        <Route path="/SelectedIngredients" element={<SelectedIngredients />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
