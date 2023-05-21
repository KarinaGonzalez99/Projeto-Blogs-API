const { User } = require('../models'); // requisito 3

const createUser = ({ email, password, displayName, image }) => User.create({
  email, password, displayName, image });

const getAllUsers = () => User.findAll(); // requisito 5

const findOneUsuario = (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  getAllUsers,
  findOneUsuario,
  };