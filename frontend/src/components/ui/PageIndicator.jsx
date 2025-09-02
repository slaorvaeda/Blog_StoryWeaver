import React from "react";

const PageIndicator = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  className = "" 
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Left Arrow */}
      <button 
        className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-full font-medium transition-all duration-200 flex items-center justify-center ${
              currentPage === page
                ? "bg-gray-300 text-gray-800"
                : "text-gray-600 hover:text-gray-800 hover:scale-110"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button 
        className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default PageIndicator;
