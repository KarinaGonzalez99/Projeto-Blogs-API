const PostCategory = (sequelize, DataTypes) => {
     const PostCategory = sequelize.define(
       'PostCategory',
       {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
      } , {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true,
      });
   
     PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        through: 'PostCategory',
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories',
      });
  
      models.Category.belongsToMany(models.BlogPost, {
        through: 'PostCategory',
        foreignKey: 'categoryId',
        otherKey: 'postId',
        as: 'categories',
      });
    };
  
    return PostCategory;
  };
  
  module.exports = PostCategory;
  
   