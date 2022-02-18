module.exports = (sequelize, Sequelize) => {
  const UserScore = sequelize.define("user_score", {
    user_score: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    user_id_fk: {
      type: Sequelize.INTEGER,
    },
  });

  UserScore.associate = (model) => {
    UserScore.belongsTo(model.users, { foreignKey: "user_id_fk" });
  };

  return UserScore;
};
