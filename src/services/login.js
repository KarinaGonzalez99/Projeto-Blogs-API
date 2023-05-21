const { User } = require('../models'); // requisito 3

const createUser = ({ email, password }) => User.create({
  email, password });

const findOneUsuario = async (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  findOneUsuario,
};
