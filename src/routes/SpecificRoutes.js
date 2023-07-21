import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Electronic from '../pages/specific/index';

export function SpecificRoute() {
  return (
    <Routes>
      <Route path='/:nameCata' element={<Electronic/>} />
    </Routes>
  )
}
