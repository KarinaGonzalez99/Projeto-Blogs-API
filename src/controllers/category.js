const categoryServices = require('../services/category'); // requisito 8

const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }

    const newCategory = await categoryServices.createCategory(name);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllCategories = async (_req, res) => {
     try {
       const categories = await categoryServices.getAllCategories();
       res.status(200).json(categories);
     } catch (error) {
       console.error(error);
       res.status(500).json({ message: 'Internal server error' });
     }
   };

module.exports = {
  createCategory,
  getAllCategories,
};
