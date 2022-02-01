const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
const models = [];

const modules = [
  require("./answer"),
  require("./classroom"),
  require("./question"),
  require("./role"),
  require("./theme"),
  require("./topic"),
  require("./user"),
];

modules.forEach((module) => {
  const model = module(sequelize, Sequelize);
  db[model.name] = model;
  models.push(model);
});
console.log(models);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

models.forEach((model) => {
  if (db[model.name].associate) db[model.name].associate(db);
});

module.exports = db;
