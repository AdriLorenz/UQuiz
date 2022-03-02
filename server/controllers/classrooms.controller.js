const db = require("../models");
const Classroom = db.classrooms;

// Get all classroom
exports.getClassrooms = async (req, res) => {
  try {
    const classroom = await Classroom.findAll();
    res.send(classroom);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get classroom by id
exports.getClassroomById = async (req, res) => {
  try {
    const classroom = await Classroom.findByPk(req.params.classroom_id);
    res.send(classroom || { message: "Classroom not found." });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getOneClassroomWithUsers = async (req, res) => {
  try {
    const classroom = await Classroom.findOne({
      where: { classroom_name: req.params.classroom_name },
      include: [{ model: db.users, include: [db.user_score] }],
    });
    res.send(classroom || { message: "Classroom not found." });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create a new classroom
exports.createClassroom = async (req, res) => {
  if (!req.body.classroom_name) {
    res.send({ message: "Please provide a classrom name." });
    return;
  }
  try {
    await Classroom.create(req.body);
    res.json({
      message: "Classroom Created",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update classroom by id
exports.updateClassroom = async (req, res) => {
  try {
    const status = await Classroom.update(req.body, {
      where: {
        classroom_id: req.params.classroom_id,
      },
    });

    const message =
      status == 1
        ? "Classroom updated."
        : "Nothing to update or classroom not found";

    res.json({
      message,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete classroom by id
exports.deleteClassroom = async (req, res) => {
  try {
    const status = await Classroom.destroy({
      where: {
        classroom_id: req.params.classroom_id,
      },
    });
    const message = status == 1 ? "Classroom deleted" : "Classroom not found.";
    res.json({
      message,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
