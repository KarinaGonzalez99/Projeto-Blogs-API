const User = (sequelize, DataTypes) => { //requisito 2 
     const User = sequelize.define(
       'User',
       {
         id: {
           allowNull: false,
           autoIncrement: true,
           primaryKey: true,
           type: DataTypes.INTEGER,
         },
         display_name: {
           type: DataTypes.STRING,
         },
         email: {
           type: DataTypes.STRING,
         },
         password: {
           type: DataTypes.STRING,
         },
         image: {
           type: DataTypes.STRING,
         },
       },
       {
        timestamps: false,
        tableName: 'users',
        undescored: true,
      }
     );
   
     return User;
   };
   
   module.exports = User;