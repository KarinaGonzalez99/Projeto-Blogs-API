const jwt = require('jsonwebtoken'); // requisito 5

const secret = process.env.JWT_SECRET || 'secretJWT';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded.data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authMiddleware;
