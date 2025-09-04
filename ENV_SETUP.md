# Environment Setup

## Critical Issue: Missing JWT_SECRET

The login is failing because the `JWT_SECRET` environment variable is not set in the backend.

## Quick Fix

1. **Create `.env` file** in the `backend` directory:

```bash
cd backend
touch .env
```

2. **Add this content to `.env`:**

```env
PORT=5001
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/story-weaver-blog
JWT_SECRET=your-super-secret-jwt-key-here-change-this-in-production
JWT_EXPIRE=7d
ADMIN_EMAIL=admin@storyweaver.com
ADMIN_PASSWORD=admin123
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
```

3. **Restart the backend server** after creating the .env file

## What This Fixes

- ✅ JWT token generation will work
- ✅ Login will succeed
- ✅ Token will be properly stored
- ✅ Authentication will work correctly

## Test the Fix

1. Create the .env file
2. Restart backend: `npm run dev`
3. Try logging in with admin@storyweaver.com / admin123
4. Check browser console for successful token storage

## Alternative: Use the Setup Script

If you prefer, you can also run:

```bash
cd backend
node create_admin.js
```

This will create the admin user and show you what environment variables are needed.
