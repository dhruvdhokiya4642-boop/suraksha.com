import { useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../firebase';
import { createUserProfile } from '../services/mongoService';
import { Mail, Lock, LogIn, UserPlus, X } from 'lucide-react';

export default function AuthWrapper({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError('');

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          formData.email, 
          formData.password
        );
        // Create user profile in Firestore
        await createUserProfile(userCredential.user.uid, {
          email: userCredential.user.email,
          displayName: userCredential.user.displayName || ''
        });
      }
      setShowAuthModal(false);
      setFormData({ email: '', password: '', confirmPassword: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Create user profile in Firestore
      await createUserProfile(result.user.uid, {
        email: result.user.email,
        displayName: result.user.displayName || ''
      });
      
      setShowAuthModal(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-space-indigo flex items-center justify-center">
        <div className="text-trust-teal text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {/* Auth Button - Compact and positioned to not overlap */}
      <div className="fixed top-20 md:top-4 right-4 z-50">
        {user ? (
          <button
            onClick={handleLogout}
            className="px-3 py-1.5 md:px-4 md:py-2 bg-urgent-coral text-white rounded-lg hover:bg-urgent-coral/90 transition text-xs md:text-sm font-semibold shadow-lg"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setShowAuthModal(true)}
            className="flex items-center gap-2 bg-trust-teal text-space-indigo px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-opacity-90 transition font-semibold text-sm md:text-base shadow-lg"
          >
            <LogIn size={16} className="md:w-[18px] md:h-[18px]" />
            Login
          </button>
        )}
      </div>

      {/* Auth Modal - Responsive */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-space-indigo border-2 border-trust-teal rounded-2xl max-w-md w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShowAuthModal(false);
                setError('');
              }}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-white transition"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>

            <h2 className="text-2xl md:text-3xl font-display font-bold text-trust-teal mb-4 md:mb-6">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>

            {error && (
              <div className="bg-urgent-coral/10 border border-urgent-coral/30 rounded-lg p-3 mb-4">
                <p className="text-urgent-coral text-xs md:text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleEmailAuth} className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-xs md:text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 md:py-3 bg-black/50 border border-trust-teal/30 rounded-lg text-white text-sm md:text-base focus:outline-none focus:border-trust-teal transition"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-2 text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 md:py-3 bg-black/50 border border-trust-teal/30 rounded-lg text-white text-sm md:text-base focus:outline-none focus:border-trust-teal transition"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-2 text-gray-300">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full pl-10 pr-4 py-2 md:py-3 bg-black/50 border border-trust-teal/30 rounded-lg text-white text-sm md:text-base focus:outline-none focus:border-trust-teal transition"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2 md:py-3 bg-trust-teal text-space-indigo font-bold rounded-lg hover:bg-trust-teal/90 transition flex items-center justify-center gap-2 text-sm md:text-base"
              >
                {isLogin ? (
                  <>
                    <LogIn size={16} className="md:w-[18px] md:h-[18px]" />
                    Sign In
                  </>
                ) : (
                  <>
                    <UserPlus size={16} className="md:w-[18px] md:h-[18px]" />
                    Sign Up
                  </>
                )}
              </button>
            </form>

            <div className="relative my-4 md:my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-2 bg-space-indigo text-gray-400">Or continue with</span>
              </div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full py-2 md:py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>

            <p className="text-center text-xs md:text-sm text-gray-400 mt-4 md:mt-6">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                }}
                className="text-trust-teal hover:underline font-semibold"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      {children}
    </>
  );
}
