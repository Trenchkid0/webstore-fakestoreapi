import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home';

export function HomeRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}
