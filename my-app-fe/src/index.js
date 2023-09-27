import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

import App from './App'
import ProductLayout from './Layouts/ProductLayout'
import Cart from './components/Cart/CartList'
import ProductDetails from './Pages/ProductDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ProductLayout />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'product-details/:id',
        element: <ProductDetails />
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()
