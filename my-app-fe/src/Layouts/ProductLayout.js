import { useContext, useState } from 'react';
import { productList } from '../components/Helper/ProductList';
import ProductCard from '../Pages/ProductCard';
import { Outlet } from 'react-router-dom';
import UserContext from '../UserContext';

export default function ProductLayout() {
     const {products} = useContext(UserContext);

     return (
          <div className="product-layout">
               {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
               ))}
               <Outlet />
          </div>

     )
}