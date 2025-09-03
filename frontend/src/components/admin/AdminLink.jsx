"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CogIcon } from '@heroicons/react/24/outline';

export default function AdminLink() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Check if user has admin/author role
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      if (user.role === 'admin' || user.role === 'author') {
        setIsAdmin(true);
      }
    }
  }, []);

  if (!isAdmin) return null;

  return (
    <Link
      href="/admin"
      className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors"
    >
      <CogIcon className="h-4 w-4 mr-2" />
      Admin Panel
    </Link>
  );
}
