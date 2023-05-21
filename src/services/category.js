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

   const getAllCategories = async () => {
     try {
       const categories = await Category.findAll();
       return categories.map((category) => category.toJSON());
     } catch (error) {
       console.error(error);
       throw new Error('Error retrieving categories');
     }
   };

module.exports = {
  createCategory,
  getAllCategories,
};
