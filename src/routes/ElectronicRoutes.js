import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Electronic from '../pages/elect/index';

export function ElectronicRoute() {
  return (
    <Routes>
      <Route path='/' element={<Electronic/>} />
    </Routes>
  )
}
