import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import Plants from './Components/Plants';
import FarmingEquipment from './Components/farmingequipment'; 
import CartItems from './Components/CartItems';
import Footer from './Components/Footer';
import LoginPage from './Components/LoginPage';
import cow_banner from './Components/Assets/cow_banner.png'
import sheep_banner from './Components/Assets/sheep_banner.png'
import chicken_banner from './Components/Assets/chicken_banner.png'
import horse_banner from './Components/Assets/horse_banner.png'
import donkey_banner from './Components/Assets/donkey_banner.png'
import dog_banner from './Components/Assets/dog_banner.png'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Doctors from './doctor/doctores'
import P4 from './satistics/P4'

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
        <Route path='/cows' element={<ShopCategory banner={cow_banner} category="cow"/>}/>
        <Route path='/sheep' element={<ShopCategory banner={sheep_banner} category="sheep"/>}/>
        <Route path='/chicken' element={<ShopCategory banner={chicken_banner} category="chicken"/>}/>
        <Route path='/horse' element={<ShopCategory banner={horse_banner} category="horse"/>}/>
        <Route path='/donkey' element={<ShopCategory banner={donkey_banner} category="donkey"/>}/>
        <Route path='/dog' element={<ShopCategory banner={dog_banner} category="dog"/>}/>
        <Route path='/product' element={<Product/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/Doctors' element={<Doctors/>} />
        <Route path='/P4' element={<P4/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
  );
}

export default App;
