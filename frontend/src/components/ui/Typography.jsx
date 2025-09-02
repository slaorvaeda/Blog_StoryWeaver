import React from "react";

export function Heading({ 
  children, 
  level = 1, 
  className = "", 
  variant = "default" 
}) {
  const baseClasses = "font-serif leading-tight";
  
  const variants = {
    default: "text-gray-800",
    light: "text-gray-600",
    white: "text-white"
  };
  
  const levels = {
    1: "text-[90px]",
    2: "text-6xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl"
  };
  
  const Tag = `h${level}`;
  
  return (
    <Tag className={`${baseClasses} ${levels[level]} ${variants[variant]} ${className}`}>
      {children}
    </Tag>
  );
}

export function Subtitle({ 
  children, 
  className = "", 
  variant = "default" 
}) {
  const baseClasses = "font-serif";
  
  const variants = {
    default: "text-3xl text-gray-800",
    light: "text-2xl text-gray-600",
    small: "text-lg text-gray-500"
  };
  
  return (
    <h2 className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </h2>
  );
}

export function BodyText({ 
  children, 
  className = "", 
  variant = "default" 
}) {
  const baseClasses = "leading-relaxed";
  
  const variants = {
    default: "text-gray-500",
    light: "text-gray-400",
    dark: "text-gray-700"
  };
  
  return (
    <p className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </p>
  );
}

export function Caption({ 
  children, 
  className = "", 
  variant = "default" 
}) {
  const baseClasses = "text-xs";
  
  const variants = {
    default: "text-gray-400",
    light: "text-gray-300",
    dark: "text-gray-600"
  };
  
  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
