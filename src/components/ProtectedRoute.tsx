import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const ProtectedRoute = ({ 
  children,
  requireAdmin = false 
}: { 
  children: React.ReactNode;
  requireAdmin?: boolean;
}) => {
  const { session, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!session.isLoading) {
      if (!session.user) {
        toast({
          title: "Access Denied",
          description: "Please log in to access this page",
          variant: "destructive",
        });
        navigate('/login');
      } else if (requireAdmin && !isAdmin) {
        toast({
          title: "Access Denied",
          description: "Admin access required",
          variant: "destructive",
        });
        navigate('/');
      }
    }
  }, [session, isAdmin, navigate, requireAdmin]);

  if (session.isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return session.user && (!requireAdmin || isAdmin) ? <>{children}</> : null;
};

export default ProtectedRoute;
