const express = require('express');
const router = express.Router();
const Poster = require('../models/Poster');
const { protect, admin } = require('../middleware/auth');

// @route   GET /api/posters
// @desc    Get all posters
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, featured, minPrice, maxPrice } = req.query;
    let query = {};

    if (category) query.category = category;
    if (featured) query.featured = featured === 'true';
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const posters = await Poster.find(query).sort({ createdAt: -1 });
    res.json({ success: true, count: posters.length, data: posters });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   GET /api/posters/:id
// @desc    Get single poster
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const poster = await Poster.findById(req.params.id);
    
    if (!poster) {
      return res.status(404).json({ success: false, message: 'Poster not found' });
    }

    res.json({ success: true, data: poster });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   POST /api/posters
// @desc    Create new poster
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
  try {
    const poster = await Poster.create(req.body);
    res.status(201).json({ success: true, data: poster });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   PUT /api/posters/:id
// @desc    Update poster
// @access  Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const poster = await Poster.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!poster) {
      return res.status(404).json({ success: false, message: 'Poster not found' });
    }

    res.json({ success: true, data: poster });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   DELETE /api/posters/:id
// @desc    Delete poster
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const poster = await Poster.findByIdAndDelete(req.params.id);

    if (!poster) {
      return res.status(404).json({ success: false, message: 'Poster not found' });
    }

    res.json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
