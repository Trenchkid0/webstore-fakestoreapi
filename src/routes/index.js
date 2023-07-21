import { Navigate, Route, Routes } from 'react-router-dom';

import Login from '../pages/login';
import Navbars from '../components/Navbar';

import {HomeRoute} from './HomeRoutes';
import { ElectronicRoute } from './ElectronicRoutes';
import GuestOnlyRoute from '../components/GuestOnly';
import GuardRoute from '../components/GuardOnly';

export function AppRoutes() {
  return (
    <Routes>
        <Route
          path='login'
          element={
            <GuestOnlyRoute>

              <Login />

            </GuestOnlyRoute>
              

          }
        />
       
        <Route
          path='/'
          element={
            <>

                <Navbars/>
                <GuardRoute/>
            </>
          }
        >  
        
          <Route path='home/*' element={<HomeRoute />} />
          <Route path='electronics/*' element={<ElectronicRoute />} /> 
          <Route path='' element={<Navigate to='/home' replace={true} />} />
        </Route>
      </Routes>
        
  )
}
