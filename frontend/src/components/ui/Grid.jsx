import React from "react";

export default function Grid({ 
  children, 
  cols = 12, 
  gap = 12, 
  className = "" 
}) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2", 
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12"
  };

  const gridGap = {
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    7: "gap-7",
    8: "gap-8",
    9: "gap-9",
    10: "gap-10",
    11: "gap-11",
    12: "gap-12",
    14: "gap-14",
    16: "gap-16"
  };

  const colsClass = gridCols[cols] || "grid-cols-12";
  const gapClass = gridGap[gap] || "gap-12";
  
  return (
    <div className={`grid ${colsClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
}
