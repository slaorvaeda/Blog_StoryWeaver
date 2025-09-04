# Backend Setup Guide

## Quick Setup

1. **Create `.env` file** in the `backend` directory with:

```env
PORT=5001
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/story-weaver-blog
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d
ADMIN_EMAIL=admin@storyweaver.com
ADMIN_PASSWORD=admin123
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
```

2. **Install dependencies:**
```bash
cd backend
npm install
```

3. **Start MongoDB** (make sure MongoDB is running)

4. **Start the server:**
```bash
npm run dev
```

## Default Login
- Email: admin@storyweaver.com
- Password: admin123

The server will create the admin user automatically on first run.
