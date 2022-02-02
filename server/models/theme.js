// Export model Theme
module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Theme = sequelize.define(
    "themes",
    {
      // Define attributes
      theme_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      theme_name: {
        type: Sequelize.STRING,
      },
    },
    {
      // Freeze Table Name, turn of timestamps fields
      timestamps: false,
      freezeTableName: true,
    }
  );

  Theme.associate = (models) => {
    Theme.hasMany(models.topics, {
      onDelete: "CASCADE",
      foreignKey: "theme_id_fk",
    });
  };

  return Theme;
};
