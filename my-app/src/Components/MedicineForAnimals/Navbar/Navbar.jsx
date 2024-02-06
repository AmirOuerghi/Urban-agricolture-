import React, { useContext,useState } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../../Context/ShopContext'


export const Navbar = () => { 

  const [menu,setMenu] = useState("shop");
  const{getTotalCartItems}=useContext(ShopContext)

    return (
    <div className='navbar'>
        <div className="nav-logo">
            <p className='p'>MedicineForAnimals </p>
        </div>
        <ul className='nav-menu'>
                <li onClick={()=>{setMenu("Cows")}}><Link style={{textDecoration:'none'}} to='/Cows'>Cows</Link>{menu==="cowes"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("sheep")}}><Link style={{textDecoration:'none'}} to='sheep'>Sheep</Link>{menu==="sheep"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("chicken")}}><Link style={{textDecoration:'none'}} to='/chicken'>Chicken</Link>{menu==="chicken"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("horse")}}><Link style={{textDecoration:'none'}} to='/horse'>Horse</Link>{menu==="horse"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("donkey")}}><Link style={{textDecoration:'none'}} to='/donkey'>Donkey</Link>{menu==="donkey"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("dog")}}><Link style={{textDecoration:'none'}} to='/dog'>Dog</Link>{menu==="dog"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
         <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
    </div>
  )
}

export default Navbar