// import sequelize
const Sequelize = require("sequelize");

// create connection
const db = new Sequelize("school_chamber", "root", "adri1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
