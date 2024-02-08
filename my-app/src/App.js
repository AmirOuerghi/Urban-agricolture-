// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import Plants from './Components/Plants';
import FarmingEquipment from './Components/farmingequipment'; 
import CartItems from './Components/CartItems';
import Footer from './Components/Footer';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/farming-equipment" element={<FarmingEquipment />} /> 
          <Route path='/cart' element={<CartItems/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
