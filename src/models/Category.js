const Category = (sequelize, DataTypes) => { // requisito 7
     const Category = sequelize.define('Category', {
       id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
       },
       name: {
         type: DataTypes.STRING,
        },
      },
      {
        timestamps: false,
        tableName: 'categories', // requisito 8
        undescored: true,
      }
    );
   
     return Category;
   };
   
   module.exports = Category;
   