# Story Weaver Blog Backend

A Node.js/Express backend API for the Story Weaver personal blog website.

## Features

- **User Authentication**: JWT-based auth with role-based access control
- **Blog Posts**: Full CRUD operations with categories, tags, and comments
- **File Uploads**: Image upload support for blog posts
- **Search**: Full-text search across posts
- **Security**: Helmet, CORS, input validation, and rate limiting

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with bcrypt
- **File Upload**: Multer
- **Security**: Helmet, CORS

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone and navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Start MongoDB** (if using local)
   ```bash
   mongod
   ```

5. **Run the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/story-weaver-blog

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# Admin User (for initial setup)
ADMIN_EMAIL=admin@storyweaver.com
ADMIN_PASSWORD=admin123

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `PUT /api/auth/change-password` - Change password
- `POST /api/auth/setup-admin` - Initial admin setup

### Posts
- `GET /api/posts` - Get published posts (with pagination, search, filters)
- `GET /api/posts/:slug` - Get single post by slug
- `POST /api/posts` - Create new post (Admin/Author)
- `PUT /api/posts/:id` - Update post (Owner/Admin)
- `DELETE /api/posts/:id` - Delete post (Owner/Admin)
- `POST /api/posts/:id/like` - Like/Unlike post
- `POST /api/posts/:id/comments` - Add comment
- `GET /api/posts/admin/all` - Get all posts (Admin/Author)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (Admin)

### Users
- `GET /api/users` - Get all users (Admin)
- `PUT /api/users/:id/role` - Update user role (Admin)

### Uploads
- `POST /api/uploads/image` - Upload image (Admin/Author)

## Database Models

### User
- Authentication fields (email, password)
- Profile information (name, bio, avatar)
- Role-based access control (admin, author, user)

### Post
- Content fields (title, excerpt, content)
- Metadata (category, tags, status)
- Engagement (views, likes, comments)
- SEO optimization

### Category
- Hierarchical organization
- Visual customization (color, icon)
- Post counting

## Security Features

- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: bcrypt with salt rounds
- **Input Validation**: Mongoose schema validation
- **CORS Protection**: Configurable origin restrictions
- **Helmet Security**: HTTP header security
- **Rate Limiting**: Built-in protection
- **File Upload Security**: Type and size restrictions

## Development

### Scripts
- `npm run dev` - Start with nodemon (development)
- `npm start` - Start production server
- `npm test` - Run tests (to be implemented)

### File Structure
```
backend/
├── models/          # Database models
├── routes/          # API route handlers
├── middleware/      # Custom middleware
├── config/          # Configuration files
├── uploads/         # File upload directory
├── server.js        # Main server file
├── package.json     # Dependencies and scripts
└── README.md        # This file
```

## Initial Setup

1. **Start the server**
2. **Create admin user** (first time only):
   ```bash
   POST /api/auth/setup-admin
   ```
3. **Login with admin credentials**
4. **Create categories** for blog posts
5. **Start creating content!**

## Production Deployment

- Set `NODE_ENV=production`
- Use strong `JWT_SECRET`
- Configure MongoDB Atlas or production database
- Set up proper CORS origins
- Use environment-specific configurations
- Implement logging and monitoring

## Contributing

1. Follow the existing code style
2. Add proper error handling
3. Include input validation
4. Write tests for new features
5. Update documentation

## License

ISC License
