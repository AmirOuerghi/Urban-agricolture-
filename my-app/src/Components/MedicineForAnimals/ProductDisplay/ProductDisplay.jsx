import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_dull_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../../Context/ShopContext'

 const ProductDisplay = (props) => {
    const {product} = props;
    const{addToCart}=useContext(ShopContext); 
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
              
               
            </div>
            <div className="productdispaly-img">
                <img  className='productdisplay-main-img'src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(100%)</p> 
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-new">{product.new_price}DT</div>
            </div>
            <div className="proudctDisplay-right-description">
                {product.description}
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span> {product.category}</p>

        </div>
    </div>
  )
}
export default ProductDisplay