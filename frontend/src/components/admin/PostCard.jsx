import { CalendarIcon, ClockIcon, EyeIcon } from '@heroicons/react/24/outline';

const PostCard = ({ post }) => {
  // Debug logging
  console.log('PostCard received post:', post);
  console.log('Post type:', typeof post);
  console.log('Post keys:', post ? Object.keys(post) : 'No post');
  
  // Safety check: ensure post is a valid object
  if (!post || typeof post !== 'object') {
    console.error('PostCard received invalid post:', post);
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <p className="text-red-600">Invalid post data</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'No date';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid date';
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group">
      <div className="flex items-start space-x-3">
        {/* Avatar with gradient background */}
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
          <span className="text-white text-lg font-bold font-serif">
            {typeof post.title === 'string' ? (post.title.charAt(0) || 'S') : 'S'}
          </span>
        </div>
        
        <div className="flex-1 min-w-0">
          {/* Title with serif font */}
          <h4 className="font-serif font-semibold text-slate-800 truncate group-hover:text-purple-600 transition-colors duration-200 text-lg">
            {typeof post.title === 'string' ? post.title : 'Untitled Story'}
          </h4>
          
          {/* Meta information */}
          <div className="flex items-center space-x-4 mt-2 text-sm text-slate-500">
            <div className="flex items-center space-x-1">
              <CalendarIcon className="h-4 w-4 text-purple-500" />
              <span className="font-medium">{formatDate(post.createdAt)}</span>
            </div>
            
            {post.readTime && (
              <div className="flex items-center space-x-1">
                <ClockIcon className="h-4 w-4 text-blue-500" />
                <span className="font-medium">{typeof post.readTime === 'number' ? post.readTime : 'Unknown'} min read</span>
              </div>
            )}
            
            {post.views && (
              <div className="flex items-center space-x-1">
                <EyeIcon className="h-4 w-4 text-emerald-500" />
                <span className="font-medium">{typeof post.views === 'number' ? post.views : 'Unknown'} views</span>
              </div>
            )}
          </div>
          
          {/* Excerpt with improved typography */}
          {post.excerpt && typeof post.excerpt === 'string' && (
            <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>
        
        {/* Status and category badges */}
        <div className="flex flex-col items-end space-y-2">
          {/* Status badge */}
          <span className={`px-3 py-1 text-xs font-medium rounded-full font-medium ${
            post.status === 'published' 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : post.status === 'draft'
              ? 'bg-yellow-100 text-yellow-700 border border-yellow-200'
              : 'bg-gray-100 text-gray-700 border border-gray-200'
          }`}>
            {typeof post.status === 'string' ? post.status : 'draft'}
          </span>
          
          {/* Category badge */}
          {post.category && (
            <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full border border-purple-200">
              {typeof post.category === 'string' ? post.category : post.category.name || 'Uncategorized'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
