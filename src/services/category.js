const { Category } = require('../models'); // requisito 8

const createCategory = async (name) => {
     try {
       const newCategory = await Category.create({ name });
       return newCategory.toJSON();
     } catch (error) {
       console.error(error);
       throw new Error('Error creating category');
     }
   };

module.exports = {
  createCategory,
};
