const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle, },
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.projects = require("./projects.model.js")(sequelize, Sequelize)

// Define associations
db.projects.belongsTo(db.users, {
  foreignKey: 'userid', as: 'owner'
});
db.users.hasMany(db.projects, {
  foreignKey: 'userid', as: 'projects' });

module.exports = db;
