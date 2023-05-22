const BlogPost = (sequelize, DataTypes) => { // requisito 10
     const BlogPost = sequelize.define(
       'BlogPost',
       {
         id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false,
         },
         title: {
           type: DataTypes.STRING,
           allowNull: false,
         },
         content: {
           type: DataTypes.TEXT,
           allowNull: false,
         },
         userId: {
           type: DataTypes.INTEGER,
           field: 'user_id',
           allowNull: false,
         },
         published: {
           type: DataTypes.DATE,
           allowNull: false,
         },
         updated: {
           type: DataTypes.DATE,
           allowNull: false,
         },
       },
       {
         underscored: true,
         timestamps: false,
         tableName: 'blog_posts',
       }
     );
   
     BlogPost.associate = (models) => {
          BlogPost.belongsTo(models.User, {
         foreignKey: 'userId',
         as: 'user',
       });
     };
   
     return BlogPost;
   };
   
   module.exports = BlogPost;
   