module.exports = (app) => {
  // Import express
  const passport = require("passport");

  // Init express router
  const routerLogin = require("express").Router();
  routerLogin.post("/", passport.authenticate("local"), function (req, res) {
    console.log("is auth : " + req.isAuthenticated());
    res.send(req.user);
  });

  app.use("/login", routerLogin);
};
