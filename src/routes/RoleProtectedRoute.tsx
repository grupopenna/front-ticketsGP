import {  Outlet } from 'react-router-dom';
// import { useAuthStore } from '../store/authStore';

const RoleProtectedRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
  // const { status, role } = useAuthStore();
  console.log(allowedRoles)

  // if (status === 'checking') return null;
  // if (status !== 'authenticated') return <Navigate to="/login" replace />;
  // if (!allowedRoles.includes(role)) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default RoleProtectedRoute;
