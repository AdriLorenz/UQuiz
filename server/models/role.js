// Export model Role
module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Role = sequelize.define(
    "roles",
    {
      // Define attributes
      role_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role_name: {
        type: Sequelize.STRING,
      },
    },
    {
      // Freeze Table Name, turn of timestamps fields
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Role;
};
