import React from "react";

export default function ImageCard({ 
  src, 
  alt, 
  className = "w-full h-[480px]", 
  showShadow = true,
  showGradient = true 
}) {
  return (
    <div className="relative">
      <div className={`bg-white shadow-2xl shadow-gray-300/40 p-3 transform translate-y-6 ${showShadow ? '' : 'shadow-none'}`}>
        <img
          alt={alt}
          src={src}
          className={`${className} object-cover block`}
        />
      </div>
      {showGradient && (
        <div className="absolute -bottom-8 left-8 w-5/6 h-3 bg-gradient-to-r from-black/10 to-transparent rounded-sm" />
      )}
    </div>
  );
}
