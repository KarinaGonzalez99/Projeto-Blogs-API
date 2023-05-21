const { createToken } = require('../auth/authentication'); // requisito 3
const userServices = require('../services/login');

const validateFields = (email, password) => !(!email || !password);

const tokenAuth = (email) => {
  const token = createToken({ email });
  return token;
};

const userController = async (req, res) => {
  const { email, password } = req.body;

  if (!validateFields(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await userServices.findOneUsuario(email, password);

  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = tokenAuth(email);

  res.status(200).json({ token });
};

module.exports = userController;