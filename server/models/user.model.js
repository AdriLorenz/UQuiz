module.exports = (sequelize, Sequelize) => {
  // Define schema
  const User = sequelize.define(
    "users",
    {
      // Define attributes
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_name: {
        type: Sequelize.STRING,
      },
      user_email: {
        type: Sequelize.STRING,
      },
      user_password: {
        type: Sequelize.STRING,
      },

      user_games_played: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      classroom_id_fk: {
        type: Sequelize.INTEGER,
      },
      role_id_fk: {
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
  User.associate = (models) => {
    User.belongsTo(models.roles, {
      foreignKey: "role_id_fk",
    });
    User.belongsTo(models.classrooms, {
      foreignKey: "classroom_id_fk",
    });
    User.hasOne(models.user_score, {
      onDelete: "CASCADE",
      foreignKey: "user_id_fk",
    });
  };

  return User;
};
