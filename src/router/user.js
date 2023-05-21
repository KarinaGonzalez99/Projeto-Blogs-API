const express = require('express'); // requisito 4
const { createUser, getAllUsers } = require('../controllers/user');
const authMiddleware = require('../middlewares/authMiddleware'); // requisito 5

const router = express.Router();

router.post('/', createUser);

router.get('/', authMiddleware, getAllUsers); // requisito 5

module.exports = router;
