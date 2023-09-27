import React, { useEffect, useContext, useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'

import axios from 'axios'
import { StoreContext } from '../contexts/StoreContext'

import NavBar from '../components/NavBar'

function Home() {
  const { cart, setProducts, setError, ENDPOINT } = useContext(StoreContext)

  console.log(`Home component rendering`)

  useEffect(() => {
    axios.get(`${ENDPOINT}/api/products`)
      .then(response => setProducts(response.data))
      .catch(e => setError(e))
  }, [])

  return (
    <>
      <NavBar cart={cart} />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Home
