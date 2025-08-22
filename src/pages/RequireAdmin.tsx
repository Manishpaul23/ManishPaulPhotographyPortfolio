import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

const RequireAdmin = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (session) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        navigate('/admin-login');
      }
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        navigate('/admin-login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  // Show loading while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // If authenticated, show the protected content
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // This shouldn't show since we redirect, but just in case
  return null;
};

export default RequireAdmin;
