import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/MedicineForAnimals/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/MedicineForAnimals/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/MedicineForAnimals/DescriptionBox/DescriptionBox'
 const Product = () => {
  const{all_product}=useContext(ShopContext);
  const{productId}=useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
     
    </div>
  )
}

export default Product