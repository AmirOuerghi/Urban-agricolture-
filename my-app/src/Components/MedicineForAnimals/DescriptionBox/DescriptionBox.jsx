import React from 'react'
import './DescriptionBox.css'

 const DescriptionBox = () => {

  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
           <p> Pharmaceuticals help animals live longer, higher-quality lives by addressing infections, diabetes, obesity, pain, cancer and age-related diseases. Just as humans rely on doctors to diagnose ailments and prescribe treatments, animals need veterinarians to manage many types of pharmaceutical treatments.

Pharmaceuticals include anti-inflammatory medications, anesthetics, pain medications, antibiotics, and specialized products for managing reproductive, cardiovascular, or metabolic conditions. To ensure effective and safe administration of animal pharmaceuticals, veterinarians and owners have a wide variety of options, including pills, liquids, injections, powders, feed additives, and boluses. </p>
        </div>
    </div>
  )
}
export default DescriptionBox