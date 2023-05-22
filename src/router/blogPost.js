const express = require('express');
const { getPosts } = require('../controllers/blogPost');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, getPosts);

module.exports = router;