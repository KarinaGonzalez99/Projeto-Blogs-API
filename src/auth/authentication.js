const jwt = require('jsonwebtoken'); // requisito 3

const jwtConfig = {
  expiresIn: '365d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'secretJWT';

const createToken = (data) => jwt.sign({ data }, secret, jwtConfig);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };