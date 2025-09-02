"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MobileNav({ navItems = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavHref = (item) => {
    switch (item.toLowerCase()) {
      case "home":
        return "/";
      case "about":
        return "/about";
      case "contact":
        return "/contact";
      case "magazine":
        return "/magazine";
      case "our work":
        return "/";
      case "architecture":
        return "/";
      case "contact us":
        return "/contact";
      default:
        return `/${item.toLowerCase().replace(/\s+/g, "-")}`;
    }
  };

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
      >
        <span className="sr-only">Open menu</span>
        {isOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <nav className="px-8 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={getNavHref(item)}
                className="block text-lg font-medium text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
