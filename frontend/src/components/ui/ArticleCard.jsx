import React from "react";

export default function ArticleCard({ 
  article, 
  isActive = false, 
  onClick, 
  showImage = true,
  showNumber = true 
}) {
  const { id, title, subtitle, image } = article;
  
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 w-full p-3 border shadow-sm transition-all duration-200 ${
        isActive 
          ? "bg-black text-white shadow-lg" 
          : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md"
      }`}
    >
      {showImage && (
        <div className="w-20 h-14 bg-gray-200 flex-shrink-0 overflow-hidden">
          {image && (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}
      <div className="text-left flex-1">
        <div className={`uppercase tracking-wider text-sm font-medium ${
          isActive ? "text-gray-900" : "text-gray-500"
        }`}>
          {title}
        </div>
        {subtitle && (
          <div className={`text-xs ${
            isActive ? "text-gray-600" : "text-gray-400"
          }`}>
            {subtitle}
          </div>
        )}
        {showNumber && (
          <div className={`text-xs ${
            isActive ? "text-gray-400" : "text-gray-300"
          }`}>
            Article {id}
          </div>
        )}
      </div>
    </button>
  );
}
