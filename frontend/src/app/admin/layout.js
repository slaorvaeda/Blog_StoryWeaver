"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Sidebar, Header, LoadingSpinner } from '@/components/admin';

export default function AdminLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Helper function to check user permissions
  const hasPermission = (requiredRole) => {
    if (!user) return false;
    if (requiredRole === 'admin') return user.role === 'admin';
    if (requiredRole === 'author') return user.role === 'admin' || user.role === 'author';
    return false;
  };

  // Check if current page requires admin-only access
  const isAdminOnlyPage = () => {
    const adminOnlyRoutes = [
      '/admin/users',
      '/admin/analytics',
      '/admin/settings'
    ];
    return adminOnlyRoutes.includes(pathname);
  };

  // Function to clear corrupted tokens
  const clearCorruptedToken = () => {
    console.log('Clearing corrupted token from localStorage');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.clear();
  };

  useEffect(() => {
    // Don't run auth check for login page
    if (pathname === '/admin/login') {
      setLoading(false);
      return;
    }

    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        
        console.log('🔍 CHECKING LOCALSTORAGE:');
        console.log('Token exists:', !!token);
        console.log('Token value:', token);
        console.log('All localStorage keys:', Object.keys(localStorage));
        console.log('localStorage contents:', localStorage);
        
        if (!token) {
          console.log('❌ No token found in localStorage, redirecting to login');
          router.push('/admin/login');
          return;
        }

        // Check if token is actually "undefined" string or other invalid values
        if (token === 'undefined' || token === 'null' || token === '' || token.length < 20) {
          console.log('❌ Invalid token detected:', token);
          console.log('Token type:', typeof token);
          console.log('Token length:', token.length);
          clearCorruptedToken();
          router.push('/admin/login');
          return;
        }
        
        // Additional check for malformed tokens
        if (typeof token !== 'string' || token.includes('undefined') || token.includes('null')) {
          console.log('❌ Malformed token detected:', token);
          clearCorruptedToken();
          router.push('/admin/login');
          return;
        }

        // First check if backend is accessible
        try {
          const healthResponse = await fetch('http://localhost:5001/api/health', {
            method: 'GET',
            signal: AbortSignal.timeout(5000) // 5 second timeout
          });
          
          if (!healthResponse.ok) {
            console.log('Backend health check failed');
            throw new Error('Backend unavailable');
          }
        } catch (healthError) {
          console.error('Backend health check failed:', healthError);
          throw new Error('Backend server is not accessible');
        }

        // Check if token is expired (basic check)
        try {
          console.log('🔍 DEBUGGING TOKEN:');
          console.log('Token length:', token.length);
          console.log('Token starts with:', token.substring(0, 20));
          console.log('Token ends with:', token.substring(token.length - 20));
          console.log('Contains dots:', token.includes('.'));
          console.log('Number of dots:', (token.match(/\./g) || []).length);
          
          const tokenPayload = JSON.parse(atob(token.split('.')[1]));
          const currentTime = Date.now() / 1000;
          
          if (tokenPayload.exp && tokenPayload.exp < currentTime) {
            console.log('Token expired, redirecting to login');
            clearCorruptedToken();
            router.push('/admin/login');
            return;
          }

          console.log('✅ Token is valid!');
        } catch (parseError) {
          console.log('❌ TOKEN FORMAT ERROR:');
          console.log('Error message:', parseError.message);
          console.log('Token preview:', token.substring(0, 100));
          clearCorruptedToken();
          router.push('/admin/login');
          return;
        }

        console.log('🔍 Making auth/me request with token:', token.substring(0, 20) + '...');
        
        const response = await fetch('http://localhost:5001/api/auth/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        console.log('🔍 Auth/me response status:', response.status);
        console.log('🔍 Auth/me response ok:', response.ok);

        if (response.status === 401) {
          console.log('Token unauthorized, redirecting to login');
          clearCorruptedToken();
          router.push('/admin/login');
          return;
        }

        if (!response.ok) {
          throw new Error(`Authentication failed: ${response.status} ${response.statusText}`);
        }

        const userData = await response.json();
        
        // Check if user has admin or author role
        if (userData.data.role !== 'admin' && userData.data.role !== 'author') {
          console.log('❌ User does not have admin or author role:', userData.data.role);
          clearCorruptedToken();
          router.push('/admin/login');
          return;
        }
        
        console.log('✅ User authenticated with role:', userData.data.role);
        
        setUser(userData.data); // Extract user data from response
      } catch (error) {
        console.error('Auth check failed:', error);
        clearCorruptedToken();
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router, pathname]);

  const handleLogout = () => {
    clearCorruptedToken();
    router.push('/admin/login');
  };

  // Check if this is the login page - return early without admin layout
  if (pathname === '/admin/login') {
    // If user is already logged in, redirect to admin dashboard
    if (user) {
      router.push('/admin');
      return null;
    }
    return <>{children}</>;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return null;
  }

  // Check if user has permission to access the current page
  if (isAdminOnlyPage() && !hasPermission('admin')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">
            This page requires administrator privileges.
          </p>
          <button
            onClick={() => router.push('/admin')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen  w-full overflow-y-hidden relative">
      <Sidebar 
        user={user}
        onLogout={handleLogout}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onCollapse={(collapsed) => setSidebarCollapsed(collapsed)}
      />
      <div className={`transition-all duration-300 md:pl-0 ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-72'}`}>
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="py-8 px-4 sm:px-6 lg:px-8 w-full min-h-[85vh] overflow-y-hidden ">
          {children}
        </main>
      </div>
    </div>
    </>
  );
}
