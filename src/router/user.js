const express = require('express'); // requisito 4
const { createUser, getAllUsers, getUserById } = require('../controllers/user');
const authMiddleware = require('../middlewares/authMiddleware'); // requisito 5

const router = express.Router();

router.post('/', createUser);

router.get('/', authMiddleware, getAllUsers); // requisito 5

router.get('/:id', authMiddleware, getUserById); // requisito 6

module.exports = router;
