import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';

export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate('/');
        console.log(isAuthenticated);
      }
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}
