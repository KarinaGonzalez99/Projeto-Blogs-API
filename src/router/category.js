const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createCategory } = require('../controllers/category'); // requisito 8

const router = express.Router();

router.post('/', authMiddleware, createCategory);

module.exports = router;