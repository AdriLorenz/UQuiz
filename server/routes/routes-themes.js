module.exports = (app) => {
  const themes = require("../controllers/themes-controller");

  const routerThemes = require("express").Router();

  const multer = require("multer");
  const upload = multer({ dest: "images/themes/", limit: 1000000 });

  // save image then create theme
  routerThemes.post("/", upload.single("themeImage"), themes.createTheme);

  // get image test theme
  routerThemes.get("/image/:id", themes.getImageTest);

  // Route get all themes
  routerThemes.get("/", themes.getThemes);
  // Route get theme by id
  routerThemes.get("/:theme_id", themes.getThemeById);
  // Route create a new theme
  //routerThemes.post("/", upload.single("themeImage"), themes.createTheme);
  // Route update theme by id
  routerThemes.put("/:theme_id", themes.updateTheme);
  // Route delete theme by id
  routerThemes.delete("/:theme_id", themes.deleteTheme);

  routerThemes.get(
<<<<<<< HEAD
    "/withTopicsWithQuestionsWithAnswers",
    themes.getThemesWithTopicsWithQuestionsWithAnswers
=======
    "/WithTopicsWithQuestions",
    themes.getThemesWithTopicAndQuestions
>>>>>>> e935dd1b02ba9d835816a388be5017dfae074b38
  );
  app.use("/themes", routerThemes);
};
