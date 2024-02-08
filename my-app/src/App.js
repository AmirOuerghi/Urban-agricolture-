// App.js

import React from 'react';
// import LoginPage from './Components/LoginPage';
import Plants from './Components/Plants'
import './App.css';
import Home from './Components/Home';
import Plants from './Components/Plants';
import LoginPage from './Components/LoginPage'; 
import FarmingEquipment from './Components/farmingequipment'; 

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
      <Route path='/cows' element={<ShopCategory banner={cow_banner} category="cow"/>}/>
      <Route path='/sheep' element={<ShopCategory banner={sheep_banner} category="sheep"/>}/>
      <Route path='/chicken' element={<ShopCategory banner={chicken_banner} category="chicken"/>}/>
      <Route path='/horse' element={<ShopCategory banner={horse_banner} category="horse"/>}/>
      <Route path='/donkey' element={<ShopCategory banner={donkey_banner} category="donkey"/>}/>
      <Route path='/dog' element={<ShopCategory banner={dog_banner} category="dog"/>}/>
      <Route path='product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    <ChatRoom/>
    </BrowserRouter>
  </div>
  );
}

export default App;
