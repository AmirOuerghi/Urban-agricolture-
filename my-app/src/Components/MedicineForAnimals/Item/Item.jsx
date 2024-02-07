import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        {props.description}
        <div className="item-prices">
            <div className="item-price-new">
                {props.new_price}DT
            </div>
        </div>
    </div>
  )
}

export default Item