// Navbar.jsx
import React from 'react';
import './Navbar.css';
import cart_icon from './Assets/cart_icon.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className="nav-logo">
          <p className='p'>URBAN🌾AGRICULTURE</p>
        </div>
        <ul className='nav-menu'>
          <li>Home🏠</li>
          <li>Medicine-Animals 💉</li>
          <li >Farming-Equipment 🚜</li>
          <li >Plants🍀</li>
          <li >Login 🔒</li>
          <li className='btn'><Link to="/plants"><button>Plants</button></Link></li> {/* Link to Plants page */}
          <li className='btn'><button>Farming Equipment</button></li>
          <li className='btn'><button>Hiba</button></li>
          <li className='btn'><Link to="/login"><button>Login</button></Link></li> {/* Link to Login page */}
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">0</div>
        </ul>
      </div>
    </div>
  );
}
