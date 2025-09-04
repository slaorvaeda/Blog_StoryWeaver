const StatCard = ({ title, value, change, icon: Icon, gradient, description }) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <div className="flex items-center justify-between mb-4">
        {/* Icon with gradient background */}
        <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        
        {/* Change indicator */}
        <div className={`text-sm font-medium px-3 py-1 rounded-full border transition-all duration-200 ${
          change >= 0 
            ? 'bg-green-100 text-green-700 border-green-200 group-hover:bg-green-200' 
            : 'bg-red-100 text-red-700 border-red-200 group-hover:bg-red-200'
        }`}>
          {change >= 0 ? '+' : ''}{change}%
        </div>
      </div>
      
      <div className="mb-2">
        {/* Value with serif font */}
        <h3 className="font-serif text-2xl font-bold text-slate-800 mb-1">{value}</h3>
        {/* Title with improved typography */}
        <p className="text-slate-600 font-medium text-sm">{title}</p>
      </div>
      
      {/* Description */}
      {description && (
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default StatCard;
