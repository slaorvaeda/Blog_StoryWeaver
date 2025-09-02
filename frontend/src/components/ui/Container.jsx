import React from "react";

export default function Container({ 
  children, 
  maxWidth = "1400px", 
  className = "",
  as = "div" 
}) {
  const Tag = as;
  
  const maxWidthClasses = {
    "1400px": "max-w-[1400px]",
    "1200px": "max-w-[1200px]",
    "6xl": "max-w-6xl",
    "4xl": "max-w-4xl",
    "3xl": "max-w-3xl",
    "2xl": "max-w-2xl",
    "xl": "max-w-xl",
    "lg": "max-w-lg",
    "md": "max-w-md",
    "sm": "max-w-sm"
  };
  
  const maxWidthClass = maxWidthClasses[maxWidth] || "max-w-[1400px]";
  
  return (
    <Tag className={`${maxWidthClass} mx-auto px-8 ${className}`}>
      {children}
    </Tag>
  );
}
