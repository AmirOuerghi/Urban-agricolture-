// Navbar.js
import React from 'react';
import './Navbar.css';
import cart_icon from './Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';

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
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">0</div>
        </ul>
      </div>
    </div>
  );
}
