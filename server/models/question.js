module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Question = sequelize.define(
    "questions",
    {
      // Define attributes
      question_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      question_content: {
        type: Sequelize.STRING,
      },
      topic_id_fk: {
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
  Question.associate = (models) => {
    Question.belongsTo(models.topics, {
      foreignKey: "topic_id_fk",
    });

    Question.hasMany(models.answers, {
      onDelete: "CASCADE",
      foreignKey: "question_id_fk",
    });
  };

  return Question;
};
