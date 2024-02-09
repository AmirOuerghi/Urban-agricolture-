// Navbar.jsx
import React, { useContext } from 'react'
import './Navbar.css';
import cart_icon from './Assets/cart_icon.png';
import { Link } from 'react-router-dom'; 
import { ShopContext } from '../ShopContext';
import YardIcon from '@mui/icons-material/Yard';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InsightsIcon from '@mui/icons-material/Insights';

export const Navbar = () => {
  const{getTotalCartItems}=useContext(ShopContext);

  
  return (
    <div>
      <div className='Navbar'>
        <div className="nav-logo">
         <Link to="/" style={{textDecoration:'none'} }> <p className='p'>URBAN🌾AGRICULTURE</p></Link>
        </div>
        <ul className='nav-menu'>
          <li  ><Link  style={{textDecoration:'none'}}to="/plants"className='test'>Plants <YardIcon/> </Link></li> 
           <NavDropdown title="Medicine-Animals 💉 " menuVariant="dark" id='v' className='test' >
             <NavDropdown.Item ><Link style={{textDecoration:'none'}}to="/cows" className='t'>Cow 🐄</Link> </NavDropdown.Item> 
             <NavDropdown.Item ><Link style={{textDecoration:'none'}} to="/sheep"className='t'>Sheep 🐑</Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link style={{textDecoration:'none'}} to="/chicken"className='t'> Chicken🐓</Link></NavDropdown.Item> 
             <NavDropdown.Item ><Link style={{textDecoration:'none'}}to="/horse"className='t'>Horse 🐎</Link> </NavDropdown.Item>
             <NavDropdown.Item ><Link style={{textDecoration:'none'}}to="/donkey"className='t'>Donkey 🫏</Link></NavDropdown.Item> 
             <NavDropdown.Item ><Link style={{textDecoration:'none'}}to="/dog"className='t'>Dog 🦮</Link> </NavDropdown.Item>
            </NavDropdown>
          <li ><Link  style={{textDecoration:'none'}}to="/farming-equipment"className='test'>Farming-Equipment <AgricultureIcon/></Link></li>
          <li ><Link  style={{textDecoration:'none'}}to="/Doctors"className='test'> PetVets <AssignmentIndIcon/> </Link></li> 
          <li ><Link  style={{textDecoration:'none'}}to="/P4"className='test'> Statistics <InsightsIcon/> </Link></li> 
          <li ><Link  style={{textDecoration:'none'}}to="/login"className='test'>Login <LockOpenIcon/></Link></li> 
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </ul>
      </div>
    </div>
  );
}