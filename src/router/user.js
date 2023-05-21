const express = require('express'); // requisito 4
const { createUser } = require('../controllers/user');

const router = express.Router();

router.post('/', createUser);

module.exports = router;
