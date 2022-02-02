module.exports = (app) => {
  const role = require("../controllers/roles-controller");

  // Init express router
  const routerRoles = require("express").Router();

  // Route get all roles
  routerRoles.get("/", role.getRoles);
  // Route get role by id
  routerRoles.get("/:role_id", role.getRoleById);
  // Route create a new role
  routerRoles.post("/", role.createRole);
  // Route update role by id
  routerRoles.put("/:role_id", role.updateRole);
  // Route delete role by id
  routerRoles.delete("/:role_id", role.deleteRole);

  app.use("/roles", routerRoles);
};
