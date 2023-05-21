const Category = (sequelize, DataTypes) => { // requisito 7
     const categorySchema = sequelize.define('Category', {
       id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
       },
       name: {
         type: DataTypes.STRING,
         allowNull: false,
       },
     });
   
     return categorySchema;
   };
   
   module.exports = Category;
   