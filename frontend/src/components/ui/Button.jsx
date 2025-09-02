import React from "react";

export default function Button({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "medium",
  className = "",
  disabled = false,
  type = "button"
}) {
  const baseClasses = "inline-block uppercase tracking-widest rounded-sm shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 focus:ring-black",
    secondary: "bg-white text-black border border-black hover:bg-gray-50 focus:ring-black",
    outline: "bg-transparent text-black border border-black hover:bg-black hover:text-white focus:ring-black",
    ghost: "bg-transparent text-gray-600 hover:text-black hover:bg-gray-100 focus:ring-gray-400"
  };
  
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-8 py-4",
    large: "px-10 py-5 text-lg"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
}
