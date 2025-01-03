import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<{
  session: UserSession;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
}>({
  session: { user: null, isLoading: true },
  signIn: async () => {},
  signOut: async () => {},
  isAdmin: false,
});

export type UserSession = {
  user: {
    id: string;
    email?: string;
    role?: string;
  } | null;
  isLoading: boolean;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<UserSession>({
    user: null,
    isLoading: true,
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const checkAdminRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error checking admin role:', error);
        return;
      }

      setIsAdmin(data?.role === 'admin');
    } catch (error) {
      console.error('Error in checkAdminRole:', error);
    }
  };

  useEffect(() => {
    // Initialize auth state
    const initializeAuth = async () => {
      try {
        // Get initial session
        const { data: { session: initialSession } } = await supabase.auth.getSession();
        
        if (initialSession?.user) {
          setSession({ user: initialSession.user, isLoading: false });
          await checkAdminRole(initialSession.user.id);
        } else {
          setSession({ user: null, isLoading: false });
          navigate('/login');
        }

        // Set up auth state change listener
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
          console.log('Auth state changed:', event);
          
          if (currentSession?.user) {
            setSession({ user: currentSession.user, isLoading: false });
            await checkAdminRole(currentSession.user.id);
          } else {
            setSession({ user: null, isLoading: false });
            if (event === 'SIGNED_OUT') {
              navigate('/login');
            }
          }
        });

        return () => {
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Error initializing auth:', error);
        setSession({ user: null, isLoading: false });
        navigate('/login');
      }
    };

    initializeAuth();
  }, [navigate]);

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Successfully signed in",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      setSession({ user: null, isLoading: false });
      setIsAdmin(false);
      
      toast({
        title: "Success",
        description: "Successfully signed out",
      });
      
      navigate('/login');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ session, signIn, signOut, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};