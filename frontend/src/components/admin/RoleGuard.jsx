'use client';

import { useRouter } from 'next/navigation';

const RoleGuard = ({ 
  children, 
  requiredRole = 'author', 
  user, 
  fallback = null,
  redirectTo = '/admin'
}) => {
  const router = useRouter();

  // Check if user has permission
  const hasPermission = () => {
    if (!user) return false;
    
    if (requiredRole === 'admin') {
      return user.role === 'admin';
    }
    
    if (requiredRole === 'author') {
      return user.role === 'admin' || user.role === 'author';
    }
    
    return false;
  };

  // If no permission, show fallback or redirect
  if (!hasPermission()) {
    if (fallback) {
      return fallback;
    }
    
    // Redirect to dashboard if no fallback provided
    router.push(redirectTo);
    return null;
  }

  // User has permission, render children
  return children;
};

export default RoleGuard;
