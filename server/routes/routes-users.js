// Import express
const express = require("express");
const passport = require("passport");
const {
  authUser,
  authRole,
  checkNotAuthenticated,
  checkAuthenticated,
} = require("../controllers/auth");
const {
  getClassrooms,
  returnClassrooms,
} = require("../controllers/classrooms-controller");
const { returnRoles } = require("../controllers/roles-controller");

// Import User Controller
const {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  returnUsers,
  updateUser,
  getUserByIdEJS,
} = require("../controllers/users-controller.js");

// Init express router
const routerUser = express.Router();

routerUser.get("/register", async (req, res) => {
  let classrooms = await returnClassrooms();
  let roles = await returnRoles();
  res.render("register.ejs", { classrooms, roles });
});

routerUser.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});

routerUser.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/questions",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// Route get all users
routerUser.get(
  "/users",
  checkAuthenticated,
  authRole(2),
  async (req, res, next) => {
    try {
      let users = await returnUsers();
      let classrooms = await returnClassrooms();
      let roles = await returnRoles();
      res.render("../views/users.ejs", { users, classrooms, roles });
    } catch (e) {
      next(e);
    }
  }
);

routerUser.get("/user", getUsers);
// Route get user by id
routerUser.get("/users/:user_id", getUserById);
// Route create a new user
routerUser.post("/register", createUser);
// Route update user by id
routerUser.put("/users/edit/:user_id", updateUser);
routerUser.get("/users/edit/:user_id", checkAuthenticated, async (req, res) => {
  const user = req.params.user_id;
  let userInfo = await getUserByIdEJS(user);
  let classrooms = await returnClassrooms();
  let roles = await returnRoles();
  res.render("edit-user.ejs", { user_id: user, userInfo, classrooms, roles });
});
// Route delete user by id
routerUser.delete("/users/:user_id", deleteUser);

// export router
module.exports = routerUser;
