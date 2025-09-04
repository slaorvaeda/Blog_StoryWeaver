const express = require('express');
const Post = require('../models/Post');
const Category = require('../models/Category');
const User = require('../models/User');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All admin routes require authentication and admin/author role
router.use(protect);
router.use(authorize('admin', 'author'));

// @desc    Get admin dashboard stats
// @route   GET /api/admin/stats
// @access  Private (Admin/Author)
router.get('/stats', async (req, res) => {
  try {
    const [
      totalPosts,
      publishedPosts,
      draftPosts,
      totalCategories,
      totalUsers,
      totalViews,
      totalLikes,
      totalComments
    ] = await Promise.all([
      Post.countDocuments(),
      Post.countDocuments({ status: 'published' }),
      Post.countDocuments({ status: 'draft' }),
      Category.countDocuments(),
      User.countDocuments(),
      Post.aggregate([{ $group: { _id: null, total: { $sum: '$views' } } }]),
      Post.aggregate([{ $group: { _id: null, total: { $sum: { $size: '$likes' } } } }]),
      Post.aggregate([{ $group: { _id: null, total: { $sum: { $size: '$comments' } } } }])
    ]);

    res.json({
      success: true,
      data: {
        totalPosts,
        publishedPosts,
        draftPosts,
        totalCategories,
        totalUsers,
        totalViews: totalViews[0]?.total || 0,
        totalLikes: totalLikes[0]?.total || 0,
        totalComments: totalComments[0]?.total || 0
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;
