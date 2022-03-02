const db = require("../models"); // Import User Model

const Role = db.roles;
const User = db.users;
const createUserScore = require("./user_score.controller").createUserScore;

// Import encryption
const bcrypt = require("bcrypt");

// Import and initialize passport

// Get all user
exports.getUsers = async (req, res) => {
  try {
    const user = await User.findAll({
      include: [{ model: Role, required: true }],
    });
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get user by id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { user_id: req.params.user_id },
      include: [{ model: Role, required: true }],
    });

    res.send(user || { message: "User not found" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.user_password, 3);

    const userWithSameEmail = await User.findOne({
      where: { user_email: req.body.user_email },
    });

    if (userWithSameEmail) {
      return res.send("Email already used !");
    } else {
      const user = await User.create({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: hashedPassword,
        role_id_fk: req.body.role_id_fk,
        classroom_id_fk: req.body.classroom_id_fk,
      });

      await createUserScore(user.user_id);

      res.json({
        message: "User Created",
      });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update user by id
exports.updateUser = async (req, res) => {
  try {
    const status = await User.update(req.body, {
      where: {
        user_id: req.params.user_id,
      },
    });

    const message =
      status == 1 ? "User updated" : "Nothing to update or user not found";

    res.json({
      message,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete user by id
exports.deleteUser = async (req, res) => {
  try {
    const status = await User.destroy({
      where: {
        user_id: req.params.user_id,
      },
    });

    const message = status == 1 ? "User deleted." : "User not found.";

    res.json({
      message,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
// Needs to be tested
exports.getAUserWithClassroomAndRole = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { user_id: req.params.user_id },
      include: [db.classrooms, db.roles],
    });
    res.send(user || { message: "User not found" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
