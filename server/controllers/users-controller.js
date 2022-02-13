const db = require("../models"); // Import User Model

const Role = db.roles;
const User = db.users;

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
    console.log(err);
  }
};

exports.returnUsers = async (req, res) => {
  try {
    const user = await User.findAll({
      include: [{ model: Role, required: true }],
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};

// Get user by id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { user_id: req.params.user_id },
      include: [{ model: Role, required: true }],
    });

    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

exports.getUserByIdEJS = async (t, req, res) => {
  try {
    const user = await User.findAll({
      where: {
        user_id: t,
      },

      include: [{ model: Role, required: true }],
    });
    return user[0];
  } catch (err) {
    console.log(err);
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    console.log("HEREEEEEEEEEE " + req.body.user_password);
    const hashedPassword = await bcrypt.hash(req.body.user_password, 3);

    // const getUserByEmail = async (req, res) => {
    //   try {
    //     const user = await User.findAll({
    //       where: {
    //         user_email: req.body.user_email,
    //       },
    //     });
    //     return user.user_email;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // const email = await getUserByEmail(req, res);
    // console.log(email);
    // if (req.body.user_email === email) {
    //   req.flash("error", "The email already exists");
    //   return null;
    // } else if (req.body.repeatPassword !== req.body.user_password) {
    //   req.flash("error", "The passwords do not match");
    //   return null;
    // } else {
    User.create({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password: hashedPassword,
      role_id_fk: req.body.role_id_fk,
      classroom_id_fk: req.body.classroom_id_fk,
    });
    res.json({
      message: "User Created",
    });
  } catch (res) {
    console.log(res);
  }
};

// Update user by id
exports.updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        user_id: req.params.user_id,
      },
    });
    res.json({
      message: "User Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete user by id
exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        user_id: req.params.user_id,
      },
    });
    res.json({
      message: "User Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
// Needs to be tested
exports.getAUserWithClassroomAndRole = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { user_id: req.params.user_id },
      include: [db.classrooms, db.roles],
    });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};
