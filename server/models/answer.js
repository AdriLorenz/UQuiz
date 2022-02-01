// Export model Question
module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Answer = sequelize.define(
    "answers",
    {
      // Define attributes
      answer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      answer_content: {
        type: Sequelize.STRING,
      },
      answer_status: {
        type: Sequelize.BOOLEAN,
      },
      question_id_fk: {
        type: Sequelize.INTEGER,
      },
    },
    {
      // Freeze Table Name, turn of timestamps fields
      timestamps: false,
      freezeTableName: true,
    }
  );

  Answer.associate = (models) => {
    Answer.belongsTo(models.questions, {
      foreignKey: "question_id_fk",
    });
  };

  return Answer;
};
