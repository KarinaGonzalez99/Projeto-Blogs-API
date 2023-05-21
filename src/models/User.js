const User = (sequelize, DataTypes) => {
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

  User.associate = (models) => { // requisito 10
    User.hasMany(models.BlogPost, {
      foreignKey: 'id',
      as: 'blogPosts',
    });
  };

  return User;
};

module.exports = User;
