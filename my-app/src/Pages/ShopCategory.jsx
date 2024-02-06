import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/MedicineForAnimals/Item/Item';


 const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
        <img  className="shopcategory-banner"src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-4</span> out of 12 products
          </p>
        
        </div>
        <div className="shopcategory-products">
          {all_product.map((item,i)=>{
            if(props.category === item.category){
              return <Item key={i} id={item.id} name={item.name}description={item.description} image={item.image} new_price={item.new_price} />
            }
            else{
              return null
            }
          })}
        </div>
  
    </div>
  )
}
export default ShopCategory
