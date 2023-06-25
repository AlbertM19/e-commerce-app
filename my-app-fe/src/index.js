import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductCard from './components/ProductCard/ProductCard';
import Cart from './components/Cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/product-details/:id',
    element: <ProductDetails />
  },
  {
    path: '/products',
    element: <ProductCard />
  },
  {
    path: '/cart',
    element: <Cart />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
