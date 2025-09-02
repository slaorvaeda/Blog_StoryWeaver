"use client";
import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

export default function Header({ title, subtitle, navItems = [], showSearch = true }) {
  const pathname = usePathname();
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
    <header className="max-w-[1200px] mx-auto px-8 py-8 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 ">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-serif tracking-tight hover:opacity-80 transition-opacity">
          <div className="leading-none">{title}</div>
          <div className="-mt-1 leading-none">{subtitle}</div>
        </Link>
        {navItems.length > 0 && (
          <div className="hidden md:flex items-center gap-8 ml-8 text-sm text-gray-500">
            <nav className="flex gap-6 uppercase tracking-widest">
              {navItems.map((item, index) => {
                const href = getNavHref(item);
                const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link 
                    key={index} 
                    href={href} 
                    className={`${isActive ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"} hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors`}
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {showSearch && (
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-4">
            <span className="hidden sm:inline">Search</span>
            <button className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              🔍
            </button>
          </div>
        )}
        <MobileNav navItems={navItems} />
      </div>
    </header>
  );
}
