import React, { useState } from 'react';
import all_product from './Assets/all_product';

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(all_product);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = all_product.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products by name"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
