import React from "react";

export default function Sidebar({ 
  children, 
  className = "", 
  position = "left",
  showPageNumber = false,
  pageNumber = 1,
  showSocials = false 
}) {
  const positionClasses = position === "left" ? "col-span-1" : "col-span-3";
  
  return (
    <aside className={`${positionClasses} ${className}`}>
      {showPageNumber && (
        <div className="hidden lg:flex flex-col items-center gap-6 justify-between text-xs text-gray-500">
          <div className="mt-8 rotate-0 space-y-3">
            <div>{String(pageNumber).padStart(2, "0")}</div>
          </div>

          {showSocials && (
            <div className="flex flex-col items-center gap-4 transform -rotate-90 tracking-widest text-xs text-gray-400">
              <div>OUR SOCIALS</div>
            </div>
          )}
        </div>
      )}
      
      {children}
    </aside>
  );
}
