const { User } = require('../models'); // requisito 3

const createUser = ({ email, password, displayName, image }) => User.create({
  email, password, displayName, image });

const getAllUsers = () => User.findAll(); // requisito 5

const findOneUsuario = (email) => User.findOne({ where: { email } });

const getByUserId = async (userId) => { // requisito 6
  const user = await User.findByPk(userId, {
    attributes: { exclude: ['password'], include: ['display_name'] },
  });
  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  findOneUsuario,
  getByUserId,
  };