import './App.css';
import { Navbar } from './Components/MedicineForAnimals/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/MedicineForAnimals/Footer/Footer';
import cow_banner from './Components/MedicineForAnimals/Assets/cow_banner.png'
import sheep_banner from './Components/MedicineForAnimals/Assets/sheep_banner.png'
import chicken_banner from './Components/MedicineForAnimals/Assets/chicken_banner.png'
import horse_banner from './Components/MedicineForAnimals/Assets/horse_banner.png'
import donkey_banner from './Components/MedicineForAnimals/Assets/donkey_banner.png'
import dog_banner from './Components/MedicineForAnimals/Assets/dog_banner.png'
import ChatRoom from './Components/ChatRoom'

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
 