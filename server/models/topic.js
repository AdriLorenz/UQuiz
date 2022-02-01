module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Topic = sequelize.define(
    "topics",
    {
      // Define attributes
      topic_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      topic_name: {
        type: Sequelize.STRING,
      },
      theme_id_fk: {
        type: Sequelize.INTEGER,
      },
    },
    {
      // Freeze Table Name, turn of timestamps fields
      timestamps: false,
      freezeTableName: true,
    }
  );

  // Specify the relationship
  Topic.associate = (models) => {
    Topic.belongsTo(models.themes, {
      foreignKey: "theme_id_fk",
    });
  };

  return Topic;
};
