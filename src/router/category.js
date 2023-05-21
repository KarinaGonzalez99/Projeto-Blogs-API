const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createCategory, getAllCategories } = require('../controllers/category');

const router = express.Router();

router.post('/', authMiddleware, createCategory);
router.get('/', authMiddleware, getAllCategories);

module.exports = router;
