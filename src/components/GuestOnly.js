import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function GuestOnlyRoute({ children }) {
  let  token = localStorage.getItem('token');
  console.log(token); 

  if (token) return <Navigate to='/home' replace={true} />;
  return children || <Outlet />;
}
