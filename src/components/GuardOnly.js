import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function GuardRoute({ children }) {
  let  token = localStorage.getItem('token');
  console.log(token); 

  if (!token) return <Navigate to='/login' replace={true} />;
  return children || <Outlet />;
}
