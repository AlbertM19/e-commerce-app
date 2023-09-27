import { useContext, useState } from 'react';

import ProductCard from '../Pages/ProductCard';

import { StoreContext } from '../contexts/StoreContext';

export default function ProductLayout() {
  const { products } = useContext(StoreContext);

  return (
    <div className="product-layout">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

  )
}