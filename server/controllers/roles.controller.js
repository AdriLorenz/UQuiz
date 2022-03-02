const db = require("../models");
const Role = db.roles;
// Get all role
exports.getRoles = async (req, res) => {
  try {
    const role = await Role.findAll();
    res.send(role);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get role by id
exports.getRoleById = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.role_id);
    res.send(role);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Create a new role
exports.createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.json({
      message: "Role Created",
      role,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update role by id
exports.updateRole = async (req, res) => {
  try {
    const status = await Role.update(req.body, {
      where: {
        role_id: req.params.role_id,
      },
    });

    const message =
      status == 1 ? "Role updated" : "Nothing to updated or role not found";
    res.json({
      message,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete role by id
exports.deleteRole = async (req, res) => {
  try {
    const status = await Role.destroy({
      where: {
        role_id: req.params.role_id,
      },
    });

    const message = status == 1 ? "Role deleted" : "Role not found";
    res.json({
      message,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
