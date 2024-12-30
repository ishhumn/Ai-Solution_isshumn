import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const ProtectedRoute = ({ 
  children,
  requireAdmin = false 
}: { 
  children: React.ReactNode;
  requireAdmin?: boolean;
}) => {
  const { session, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session.isLoading && !session.user) {
      navigate('/login');
    } else if (requireAdmin && !isAdmin) {
      navigate('/');
    }
  }, [session, isAdmin, navigate, requireAdmin]);

  if (session.isLoading) {
    return <div>Loading...</div>;
  }

  return session.user ? <>{children}</> : null;
};

export default ProtectedRoute;