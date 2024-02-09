// Navbar.jsx
import React, { useContext } from 'react'
import './Navbar.css';
import cart_icon from './Assets/cart_icon.png';
import { Link } from 'react-router-dom'; 
import { ShopContext } from '../ShopContext';
import YardIcon from '@mui/icons-material/Yard';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import NavDropdown from 'react-bootstrap/NavDropdown';


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
            <Link style={{textDecoration:'none'}}to="/"> <NavDropdown.Item >cow</NavDropdown.Item></Link> 
            <Link style={{textDecoration:'none'}} to="/"> <NavDropdown.Item >Sheep</NavDropdown.Item></Link> 
            <Link style={{textDecoration:'none'}}to="/"> <NavDropdown.Item >Horse</NavDropdown.Item></Link> 
            <Link style={{textDecoration:'none'}}to="/"> <NavDropdown.Item >Donkey</NavDropdown.Item></Link> 
            <Link style={{textDecoration:'none'}}to="/"> <NavDropdown.Item >Dog</NavDropdown.Item></Link> 
            </NavDropdown>
          <li ><Link  style={{textDecoration:'none'}}to="/farming-equipment"className='test'>Farming-Equipment <AgricultureIcon/></Link></li>
          <li ><Link  style={{textDecoration:'none'}}to="/m"className='test'> PetVets <AssignmentIndIcon/> </Link></li> 
          <li ><Link  style={{textDecoration:'none'}}to="/login"className='test'>Login <LockOpenIcon/></Link></li> 
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </ul>
      </div>
    </div>
  );
}