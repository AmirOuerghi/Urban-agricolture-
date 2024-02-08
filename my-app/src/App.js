// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import Plants from './Components/Plants';
import LoginPage from './Components/LoginPage'; 
import FarmingEquipment from './Components/farmingequipment'; 

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
