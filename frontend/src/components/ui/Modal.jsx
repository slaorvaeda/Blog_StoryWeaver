"use client"
import React, { useEffect } from "react";

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = "medium",
  showCloseButton = true 
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
    xlarge: "max-w-6xl"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className={`bg-white ${sizes[size]} w-full mx-4 p-8 rounded shadow-lg max-h-[90vh] overflow-y-auto`}>
        {showCloseButton && (
          <button 
            className="ml-auto block text-sm text-gray-500 mb-4 hover:text-black transition-colors" 
            onClick={onClose}
          >
            ✕
          </button>
        )}
        {title && (
          <h3 className="font-serif text-3xl mb-4">{title}</h3>
        )}
        {children}
      </div>
    </div>
  );
}
