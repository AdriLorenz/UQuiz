module.exports = (app) => {
  // Import express
  const passport = require("passport");
  // Init express router
  const routerLogin = require("express").Router();
  routerLogin.post("/", passport.authenticate("local"), function (req, res) {
    res.send(req.user);
    //console.log(req.user);
  });

  app.use("/login", routerLogin);
};
