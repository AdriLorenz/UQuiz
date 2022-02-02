module.exports = (app) => {
  const passport = require("passport");

  const auth = require("../controllers/auth");
  const classroom = require("../controllers/classrooms-controller");
  const { returnRoles } = require("../controllers/roles-controller");
  const user = require("../controllers/users-controller");

  // Init express router
  const routerUser = require("express").Router();

  // register page
  routerUser.get("/register", async (req, res) => {
    let classrooms = await classroom.returnClassrooms();
    let roles = await returnRoles();
    res.render("register.ejs", { classrooms, roles });
  });

  routerUser.get("/login", auth.checkNotAuthenticated, (req, res) => {
    res.render("login.ejs");
  });

  routerUser.post(
    "/login",
    auth.checkNotAuthenticated,
    passport.authenticate("local", {
      successRedirect: "/questions",
      failureRedirect: "/login",
      failureFlash: true,
    })
  );

  // Route get all users
  // routerUser.get(
  //   "/",
  //   auth.checkAuthenticated,
  //   auth.authRole(2),
  //   async (req, res, next) => {
  //     try {
  //       let users = await user.returnUsers();
  //       let classrooms = await classroom.returnClassrooms();
  //       let roles = await returnRoles();
  //       res.render("../views/users.ejs", { users, classrooms, roles });
  //     } catch (e) {
  //       next(e);
  //     }
  //   }
  // );

  routerUser.get("/", user.getUsers);
  // Route get user by id
  routerUser.get("/:user_id", user.getUserById);
  // Route create a new user
  routerUser.post("/register", user.createUser);
  // Route update user by id
  routerUser.put("/edit/:user_id", user.updateUser);

  //edit user page
  routerUser.get(
    "/edit/:user_id",
    auth.checkAuthenticated,
    async (req, res) => {
      const userToEdit = user.getAUserWithClassroomAndRole;
      res.render("edit-user.ejs", {
        userToEdit,
      });
    }
  );

  routerUser.get("/getInfos/:user_id", user.getAUserWithClassroomAndRole);
  // Route delete user by id
  routerUser.delete("/:user_id", user.deleteUser);

  app.use("/users", routerUser);
};
