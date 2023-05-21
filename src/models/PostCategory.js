const PostCategory = (sequelize, DataTypes) => {
     const PostCategory = sequelize.define(
       'PostCategory',
       {
         postId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           references: {
             model: 'BlogPost',
             key: 'id',
           },
         },
         categoryId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           references: {
             model: 'Category',
             key: 'id',
           },
         },
       },
       {
         timestamps: false,
         underscored: true,
         tableName: 'postCategories',
       }
     );
   
     PostCategory.associate = (models) => {
       models.Category.belongsToMany(models.BlogPost, {
         through: 'PostCategory',
         foreignKey: 'categoryId',
         otherKey: 'postId',
       });
   
       models.BlogPost.belongsToMany(models.Category, {
         through: 'PostCategory',
         foreignKey: 'postId',
         otherKey: 'categoryId',
       });
     };
   
     return PostCategory;
   };
   
   module.exports = PostCategory;
   