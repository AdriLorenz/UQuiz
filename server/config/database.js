// import sequelize
const Sequelize = require("sequelize");

// create connection
const db = new Sequelize("school_chamber", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
