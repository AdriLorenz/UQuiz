module.exports = (app) => {
  //const { checkAuthenticated, authRole } = require("../controllers/auth");

  // Init express router
  const routers = require("express").Router();

  routers.get("/reports", async (req, res, next) => {
    try {
      res.render("../views/reports.ejs");
    } catch (error) {
      next(error);
    }
  });

  routers.get("/help", function (req, res) {
    res.redirect("http://localhost:8080/UQuiz.html");
  });
};
