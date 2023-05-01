import logo from './logo.svg';
import './App.css';

import PizzaCheckBox from './Components/PizzaCheckBox';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SelectedIngredients from './Components/SelectedIngredients';
import Deliver from './Components/Deliver';

function App() {
  return (
  <BrowserRouter>
      <Routes> 
      <Route path="/" element={<PizzaCheckBox />} />
        <Route path="/SelectedIngredients" element={<SelectedIngredients />} />
        <Route path="/Order" element={<Deliver />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
