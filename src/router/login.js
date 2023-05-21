const express = require('express'); // requisito 3
const login = require('../controllers/login');

const router = express.Router();

router.post('/', login);

module.exports = router;