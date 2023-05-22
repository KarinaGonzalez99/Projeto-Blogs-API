const { createToken } = require('../auth/authentication'); // requisito 4
const userServices = require('../services/login'); 

const validar = ({ displayName, email, password }) => {
  if (displayName.length < 8) { 
    throw new Error('"displayName" length must be at least 8 characters long'); 
}

  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) { 
    throw new Error('"email" must be a valid email'); 
}

  if (password.length < 6) { 
    throw new Error('"password" length must be at least 6 characters long'); 
}
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  try {
    validar({ displayName, email, password });

    if (await userServices.findOneUsuario(email)) { 
      return res.status(409).json({ message: 'User already registered' }); 
}

    const newUser = await userServices.createUser({ displayName, email, password, image });
    console.log(newUser);
    const token = createToken({ email });
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => { // requisito 5
  try {
    const users = await userServices.getAllUsers();
    const allUsers = users.map(({ id, displayName, email, image }) => ({
      id,
      displayName,
      email,
      image,
    }));
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getUserById = async (req, res) => { // requisito 6
  const { params } = req;
  const user = await userServices.getByUserId(params.id);
  if (!user || user.dataValues === undefined) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  const { id, displayName, email, image } = user;
  return res.status(200).json({ id, displayName, email, image });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
