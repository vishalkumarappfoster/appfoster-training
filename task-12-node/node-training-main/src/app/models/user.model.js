module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    address: {
      type: Sequelize.STRING
    },
    mobile_Number: {
      type: Sequelize.STRING
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Project, {
      foreignKey: 'user_id'
    });
  };

  return User;
};
