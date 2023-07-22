import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import Sort from '../pages/home/sort';

export function HomeRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:sorttype' element={<Sort />} />
    </Routes>
  );
}
