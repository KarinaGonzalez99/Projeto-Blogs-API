const express = require('express');
const { getPosts } = require('../controllers/blogPost');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getPosts);

module.exports = router;