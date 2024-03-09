import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

interface IProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
  const [cookies] = useCookies(['TOKEN']);
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!cookies.TOKEN) {
    return <Navigate to={'/login'} />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
