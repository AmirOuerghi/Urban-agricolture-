import React, { useContext } from 'react'
import './CartItems.css'
import {ShopContext} from '../ShopContext'
import remove_icon from './Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'


const CartItems = () => {
  const { getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
     {all_product.map((e)=>{
      if(cartItems[e.id]>0){
        return  <div>
        <div className="cartitems-format cartitems-format-main">
          <img src={e.image} alt="" className='carticon-product-icon'/>
          <p>{e.name}</p>
          <p>{e.new_price}DT</p>
          <button className='cartitems-quantity'>{cartItems[e.id]}</button>
          <p>{e.new_price * cartItems[e.id]}DT</p>
          <img className='cartitems-remove-icon' src={remove_icon}  onClick={()=>{removeFromCart(e.id)}} alt="" />
        </div>
        <hr />
        </div>
      }
      return null
     })}
     <div className="cartitems-down">
      <div className="cartitems-total">
        <h1>Cart Totals</h1>
        <div>
          <div className="cartitems-total-item">
            <p>Subtatal</p>
            <p>{getTotalCartAmount()}DT</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping Free</p>
            <p>Free</p>
          </div>
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>{getTotalCartAmount()}DT</h3>
          </div>
        </div>
       <Link to="https://www.paypal.com/fr/home" > <button>💲 BUY With PAYPAL 🅿️</button></Link>
       <Link to="https://d17.tn/"><button>💲 BUY With D17</button></Link>
       <Link to="https://bitcoin.org/fr/"><button>💲 BUY With Bitcoin ₿</button></Link>
      </div>
     </div>
     </div> 
  )
}   
export default CartItems
