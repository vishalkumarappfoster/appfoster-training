module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define("project", {
    userid: {
      type: Sequelize.INTEGER
    },
    project_name: {
      type: Sequelize.STRING
    }
  });

  // Define a many-to-one association between Projects and Users
  // Project.belongsTo(sequelize.models.user, {
  //   foreignKey: "user_id"
  // });
  return Project;
};