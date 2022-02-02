// Export model User
module.exports = (sequelize, Sequelize) => {
  // Define schema
  const Classroom = sequelize.define(
    "classrooms",
    {
      // Define attributes
      classroom_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      classroom_name: {
        type: Sequelize.STRING,
      },
    },
    {
      // Freeze Table Name, turn of timestamps fields
      timestamps: false,
      freezeTableName: true,
    }
  );

  Classroom.associate = (models) => {
    Classroom.hasMany(models.users, {
      onDelete: "CASCADE",
    });
  };

  return Classroom;
};
