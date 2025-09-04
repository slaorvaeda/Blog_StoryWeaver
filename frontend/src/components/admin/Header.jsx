'use client';

import { BookOpenIcon, BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Header = ({ onMenuClick }) => {
  return (
    <div className="sticky top-2 z-10 p-1 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200 shadow-sm rounded-2xl md:max-w-[1000px] md:mx-auto md:my-4 ">
      <div className="flex items-center justify-between px-4 py-4 ">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-3">
            <Link href='/'>
            <img src="/logo.png" alt="Story Weaver" className='h-10' />
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center space-x-2 bg-slate-100 rounded-lg px-3 py-2">
            <MagnifyingGlassIcon className="h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm text-slate-700 placeholder-slate-500 w-48"
            />
          </div>

          {/* Notifications */}
          <button className="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all duration-200 relative">
            <BellIcon className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
