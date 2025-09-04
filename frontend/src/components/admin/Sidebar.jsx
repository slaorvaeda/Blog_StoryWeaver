'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  DocumentTextIcon, 
  FolderIcon, 
  UsersIcon, 
  ChartBarIcon, 
  CogIcon,
  BookOpenIcon,
  SparklesIcon,
  ArrowLeftOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ user, onLogout, sidebarOpen, setSidebarOpen, onCollapse }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  // Define navigation items with role-based access
  const getNavigation = () => {
    const baseNavigation = [
      { 
        name: 'Dashboard', 
        href: '/admin', 
        icon: HomeIcon, 
        description: 'Overview & insights',
        color: 'from-blue-500 to-cyan-500',
        roles: ['admin', 'author']
      },
      { 
        name: 'Stories', 
        href: '/admin/posts', 
        icon: DocumentTextIcon, 
        description: 'Manage your tales',
        color: 'from-emerald-500 to-teal-500',
        roles: ['admin', 'author']
      },
      { 
        name: 'Categories', 
        href: '/admin/categories', 
        icon: FolderIcon, 
        description: 'Organize content',
        color: 'from-purple-500 to-indigo-500',
        roles: ['admin', 'author']
      },
    ];

    // Admin-only navigation items
    const adminNavigation = [
      { 
        name: 'Writers', 
        href: '/admin/users', 
        icon: UsersIcon, 
        description: 'Team management',
        color: 'from-rose-500 to-pink-500',
        roles: ['admin']
      },
      { 
        name: 'Analytics', 
        href: '/admin/analytics', 
        icon: ChartBarIcon, 
        description: 'Track performance',
        color: 'from-amber-500 to-orange-500',
        roles: ['admin']
      },
      { 
        name: 'Settings', 
        href: '/admin/settings', 
        icon: CogIcon, 
        description: 'Configure blog',
        color: 'from-slate-500 to-gray-500',
        roles: ['admin']
      },
    ];

    // Return navigation based on user role
    if (user.role === 'admin') {
      return [...baseNavigation, ...adminNavigation];
    } else if (user.role === 'author') {
      return baseNavigation;
    }
    
    return baseNavigation;
  };

  const navigation = getNavigation();

  return (
    <>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 z-50 h-full backdrop-blur-lg transform transition-all duration-300 ease-in-out md:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } ${isCollapsed ? 'w-18' : 'w-72'} flex flex-col justify-between`}>
        
        {/* Logo and Brand */}
        <div className="flex items-center justify-between h-20 w-full px-4  md:rounded-2xl md:mt-4 md:m-auto md:ml-1">
          <div className="flex items-center space-x-3">
            
              <img src="/logo.png" alt="Story Weaver" className='h-10 ' />
            {!isCollapsed && (
              <div className="transition-all duration-300 overflow-hidden">
               
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                const next = !isCollapsed;
                setIsCollapsed(next);
                if (onCollapse) onCollapse(next);
              }}
              className="hidden md:block  rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
              title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <ChevronRightIcon className="w-8 h-8 bg-slate-400/20 rounded-lg p-1" />
              ) : (
                <ChevronLeftIcon className="w-8 h-8" />
              )}
            </button>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className=" flex-1 overflow-y-auto p-3 scrollbar-thin scrollbar-thumb-slate-700/70 scrollbar-track-transparent bg-transparent md:w-full md:flex md:justify-center md:items-center md:p-3 ">
          <div className={` space-y-1 bg-slate-400/20 md:m-1 md:p-1 md:rounded-2xl md:shadow-lg ${isCollapsed ? 'w-auto' : 'w-full'} `}>
            {navigation.map((item) => {
              const isActive = item.href === '/admin' 
                ? pathname === '/admin' 
                : pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200  relative ${
                    isActive 
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg` 
                      : 'text-slate-700 hover:bg-slate-400 hover:text-white hover:shadow-md'
                  }`}
                  title={isCollapsed ? item.name : undefined}
                  onClick={() => setSidebarOpen(false)}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isActive ? 'bg-white/20' : 'bg-slate-800 group-hover:bg-slate-700'
                  }`}>
                    <item.icon className={`h-5 w-5 transition-all duration-200 ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'
                    }`} />
                  </div>
                  {!isCollapsed && (
                    <div className="ml-3 transition-all duration-300 overflow-hidden">
                      <div className="font-semibold whitespace-nowrap">{item.name}</div>
                      <div className={`text-xs ${isActive ? 'text-white/80' : 'text-slate-500 group-hover:text-slate-200'}`}>
                        {item.description}
                      </div>
                    </div>
                  )}
                  
                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      {item.name}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0  "></div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* User Profile */}
        <div className="w-full p-4  backdrop-blur-sm md:rounded-2xl md:mb-4 md:m-auto md:ml-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center relative">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-gray-100 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white text-sm font-bold">
                  {typeof user.name === 'string' ? (user.name.charAt(0) || 'A') : 'A'}
                </span>
              </div>
              
              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  {user.name} ({user.role === 'admin' ? 'Administrator' : 'Author'})
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-l-4 border-l-slate-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}
              
              {!isCollapsed && (
                <div className="ml-3 transition-all duration-300 overflow-hidden">
                  <p className="text-sm font-semibold text-gray-700 truncate">{user.name}</p>
                  <div className="flex items-center space-x-1">
                    <SparklesIcon className="h-3 w-3 text-blue-400 flex-shrink-0" />
                    <p className="text-xs text-slate-400 capitalize truncate">
                      {user.role === 'admin' ? 'Administrator' : 'Author'}
                    </p>
                  </div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <button
                onClick={onLogout}
                className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200 flex-shrink-0"
                title="Logout"
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
