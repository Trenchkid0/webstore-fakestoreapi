import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Detail from '../pages/detail/index';

export function DetailRoute() {
  return (
    <Routes>
      <Route path='/:stuffId' element={<Detail/>} />
    </Routes>
  )
}
