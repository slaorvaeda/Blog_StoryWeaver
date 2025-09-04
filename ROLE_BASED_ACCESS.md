# Role-Based Access Control System

## Overview

The admin panel now supports different user roles with appropriate access levels:

- **Admin**: Full access to all features
- **Author**: Access to content management features only

## User Roles

### Admin Role
- ✅ Dashboard access
- ✅ Stories/Posts management
- ✅ Categories management
- ✅ User management (Writers)
- ✅ Analytics
- ✅ Settings

### Author Role
- ✅ Dashboard access
- ✅ Stories/Posts management
- ✅ Categories management
- ❌ User management (Writers)
- ❌ Analytics
- ❌ Settings

## Implementation Details

### 1. Layout-Level Protection
The `AdminLayout` component automatically checks user permissions and restricts access to admin-only pages.

### 2. Sidebar Navigation
The sidebar dynamically shows navigation items based on user role:
- Authors see: Dashboard, Stories, Categories
- Admins see: All navigation items

### 3. Page-Level Protection
Use the `RoleGuard` component to protect individual pages:

```jsx
import { RoleGuard } from '@/components/admin';

<RoleGuard 
  requiredRole="admin" 
  user={user}
  fallback={<AccessDeniedMessage />}
>
  {/* Protected content */}
</RoleGuard>
```

### 4. API-Level Protection
Backend routes are protected using middleware that checks user roles.

## Usage Examples

### Protecting Admin-Only Pages
```jsx
// In users page
<RoleGuard requiredRole="admin" user={user}>
  <UserManagementContent />
</RoleGuard>
```

### Protecting Author+ Pages
```jsx
// In posts page
<RoleGuard requiredRole="author" user={user}>
  <PostManagementContent />
</RoleGuard>
```

### Custom Fallback
```jsx
<RoleGuard 
  requiredRole="admin" 
  user={user}
  fallback={<CustomAccessDenied />}
>
  <AdminContent />
</RoleGuard>
```

## Current User Status

Your current user has the **Author** role, which means you can:
- Access the dashboard
- Manage stories/posts
- Manage categories
- Cannot access user management, analytics, or settings

## Changing User Role

To change a user's role to admin, you can:
1. Use the admin panel (if you have admin access)
2. Modify the database directly
3. Use the backend API with admin privileges

## Security Notes

- Role checks happen on both frontend and backend
- JWT tokens include user role information
- API endpoints validate permissions before processing requests
- UI automatically adapts based on user permissions
