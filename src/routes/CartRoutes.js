import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Cart from '../pages/cart/index';

export function CartRoute() {
  return (
    <Routes>
      <Route path='/:cartId' element={<Cart/>} />
    </Routes>
  )
}
