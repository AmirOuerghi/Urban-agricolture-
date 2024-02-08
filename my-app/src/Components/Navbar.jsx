// Navbar.jsx
import React from 'react';
import './Navbar.css';
import cart_icon from './Assets/cart_icon.png';
import { Link } from 'react-router-dom'; 

export const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className="nav-logo">
          <p className='p'>URBAN🌾AGRICULTURE</p>
        </div>
        <ul className='nav-menu'>
          <li className='btn'><Link to="/plants"><button>Plants</button></Link></li> 
          <li className='btn'><Link to="/farming-equipment"><button>Farming Equipment</button></Link></li>
          <li className='btn'><Link to="/login"><button>Login</button></Link></li> 
          <li className='btn'><Link to="/"><button>Home</button></Link></li> 
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">0</div>
        </ul>
      </div>
    </div>
  );
}
