const PerformanceInsightCard = ({ title, value, trend, description, icon: Icon, color }) => {
  // Debug logging
  console.log('PerformanceInsightCard received props:', { title, value, trend, description, icon: Icon, color });
  console.log('Icon type:', typeof Icon);
  console.log('Icon value:', Icon);
  
  // Safety check: ensure icon is a valid component
  if (!Icon || typeof Icon !== 'function') {
    console.error('PerformanceInsightCard received invalid icon:', Icon);
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <p className="text-red-600">Invalid icon component</p>
      </div>
    );
  }

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group">
      <div className="flex items-center justify-between mb-3">
        {/* Icon with colored background */}
        <div className={`w-8 h-8 bg-${color || 'gray'}-100 rounded-lg flex items-center justify-center group-hover:bg-${color || 'gray'}-200 transition-all duration-200`}>
          <Icon className={`h-4 w-4 text-${color || 'gray'}-600`} />
        </div>
        
        {/* Trend indicator */}
        <div className={`flex items-center space-x-1 text-sm font-medium ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          <svg className={`w-4 h-4 ${trend === 'up' ? 'rotate-0' : 'rotate-180'} transition-transform duration-200`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="font-medium">
            {trend === 'up' ? 'Growing' : 'Declining'}
          </span>
        </div>
      </div>
      
      {/* Value with serif font */}
      <h4 className="font-serif text-lg font-semibold text-slate-800 mb-1">{value || 'N/A'}</h4>
      {/* Title with improved typography */}
      <p className="text-sm text-slate-600 font-medium mb-2">{title || 'Untitled'}</p>
      
      {/* Description */}
      {description && typeof description === 'string' && (
        <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default PerformanceInsightCard;
