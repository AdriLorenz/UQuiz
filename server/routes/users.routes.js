module.exports = (app) => {
  const auth = require("../controllers/auth.controller");
  const user = require("../controllers/users.controller");

  // Init express router
  const routerUser = require("express").Router();

  routerUser.get("/", user.getUsers);
  // Route get user by id
  routerUser.get("/:user_id", user.getUserById);
  // Route create a new user
  routerUser.post("/register", user.createUser);
  // Route update user by id
  routerUser.put("/edit/:user_id", user.updateUser);

  routerUser.get("/getInfos/:user_id", user.getAUserWithClassroomAndRole);
  // Route delete user by id
  routerUser.delete("/:user_id", user.deleteUser);

  //routerUser.use(auth.checkAuthenticated);
  app.use("/users", routerUser);
};
