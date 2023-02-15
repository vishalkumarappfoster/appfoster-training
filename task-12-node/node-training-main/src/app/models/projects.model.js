module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define("project", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    project_name: {
      type: Sequelize.STRING
    }
  });

  Project.associate = (models) => {
    Project.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  };

  return Project;
};
