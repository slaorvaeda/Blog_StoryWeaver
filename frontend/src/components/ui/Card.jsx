import React from "react";

export default function Card({ 
  children, 
  className = "", 
  padding = "p-6",
  shadow = "shadow-md",
  border = "border border-gray-200",
  hover = "hover:shadow-lg",
  onClick 
}) {
  const baseClasses = `bg-white rounded-lg transition-all duration-200 ${padding} ${shadow} ${border} ${hover}`;
  const cursorClass = onClick ? "cursor-pointer" : "";
  
  if (onClick) {
    return (
      <button 
        onClick={onClick} 
        className={`${baseClasses} ${cursorClass} ${className} text-left w-full`}
      >
        {children}
      </button>
    );
  }
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
}
