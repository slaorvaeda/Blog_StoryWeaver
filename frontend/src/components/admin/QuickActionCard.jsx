import Link from 'next/link';

const QuickActionCard = ({ title, description, href, icon: Icon, gradient, color }) => {
  return (
    <Link 
      href={href}
      className="group block bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center space-x-3">
        {/* Icon with gradient background */}
        <div className={`w-10 h-10 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        
        <div className="flex-1">
          {/* Title with serif font */}
          <h4 className="font-serif font-semibold text-slate-800 group-hover:text-purple-600 transition-colors duration-200 text-base">
            {title}
          </h4>
          {/* Description with improved typography */}
          <p className="text-sm text-slate-600 leading-relaxed mt-1">{description}</p>
        </div>
        
        {/* Arrow indicator */}
        <div className={`w-6 h-6 bg-${color}-100 rounded-full flex items-center justify-center group-hover:bg-${color}-200 transition-all duration-200`}>
          <svg className="w-3 h-3 text-slate-400 group-hover:text-slate-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default QuickActionCard;
