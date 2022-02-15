const db = require("../models");
const Classroom = db.classrooms;

// Get all classroom
exports.getClassrooms = async (req, res) => {
  try {
    const classroom = await Classroom.findAll();
    res.send(classroom);
  } catch (err) {
    console.log(err);
  }
};

// Get classroom by id
exports.getClassroomById = async (req, res) => {
  try {
    const classroom = await Classroom.findByPk(req.params.classroom_id);
    res.send(classroom);
  } catch (err) {
    console.log(err);
  }
};

exports.getOneClassroomWithUsers = async (req, res) => {
  try {
    const classroom = await Classroom.findOne({
      where: { classroom_name: req.params.classroom_name },
      include: [db.users],
    });
    console.log(classroom);
    res.send(classroom);
  } catch (error) {
    console.log(error);
  }
};

// Create a new classroom
exports.createClassroom = async (req, res) => {
  try {
    await Classroom.create(req.body);
    res.json({
      message: "Classroom Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update classroom by id
exports.updateClassroom = async (req, res) => {
  try {
    await Classroom.update(req.body, {
      where: {
        classroom_id: req.params.classroom_id,
      },
    });
    res.json({
      message: "Classroom Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete classroom by id
exports.deleteClassroom = async (req, res) => {
  try {
    await Classroom.destroy({
      where: {
        classroom_id: req.params.classroom_id,
      },
    });
    res.json({
      message: "Classroom Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
