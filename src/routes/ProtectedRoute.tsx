import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../store/useAuthContext';

const ProtectedRoute = () => {
  const { status, checkToken } = useAuthContext();
    const navigation = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      if (status !== 'checking') {
        if (status === 'authenticated') {
          setIsLoading(false);
        } else {
          navigation('/login');
        }
      } else {
        checkToken()
      }
    }, [navigation]);
  
    useEffect(()=> {
      if (status !== 'checking') {
        if (status === 'authenticated') {
          setIsLoading(false);
        } else {
          navigation('/login');
        }
      }
    }, [status])
  
  
    if (isLoading) return null;
  
    return <Outlet />;
};

export default ProtectedRoute;
