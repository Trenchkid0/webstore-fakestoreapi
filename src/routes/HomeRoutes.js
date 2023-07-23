import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import HomeById from '../pages/home/byId';

import Sort from '../pages/home/sort';

export function HomeRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:userId' element={<HomeById />} />
      <Route path='/:sorttype' element={<Sort />} />
    </Routes>
  );
}
