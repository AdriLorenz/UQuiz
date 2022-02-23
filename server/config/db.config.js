module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "adri123",
  DB: "school_chamber",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
