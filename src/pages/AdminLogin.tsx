import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/admin-dashboard');
      }
    };
    checkUser();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setPassword('');
    } else {
      navigate('/admin-dashboard');
    }

    setIsLoading(false);
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
        {/* floating blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-200"></div>

        <div className="relative z-10 max-w-md w-full bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
              <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold text-white tracking-tight">
              Admin Access
            </h2>
            <p className="mt-2 text-center text-sm text-gray-200">
              Enter your admin credentials to manage your portfolio
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-lg block w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 sm:text-sm"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-lg block w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 sm:text-sm"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-400/40 rounded-md p-3 text-sm text-red-200 mt-4">
                {error}
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-3 px-4 text-sm font-semibold rounded-lg text-white shadow-lg transition-all duration-300 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-[1.02]'
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Access Dashboard'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLogin;
