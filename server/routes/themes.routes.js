module.exports = (app) => {
  const themes = require("../controllers/themes.controller");

  const routerThemes = require("express").Router();
  const auth = require("../controllers/auth.controller");

  const multer = require("multer");
  const upload = multer({ dest: "public/images/themes/" });

  // save image then create theme
  routerThemes.post("/", upload.single("themeImage"), themes.createTheme);

  // get image test theme
  routerThemes.get("/image/:id", themes.getImageTest);

  //edit theme name
  routerThemes.put("/:theme_id/editThemeName", themes.updateThemeName);
  // Route for topics inside a theme
  routerThemes.get("/:theme_name/topics", themes.getOneThemeWithTopics);
  // Route get all themes
  routerThemes.get("/", themes.getThemes);
  // Route get theme by id
  routerThemes.get("/:theme_id", themes.getThemeById);
  // Route create a new theme
  //routerThemes.post("/", upload.single("themeImage"), themes.createTheme);

  // Route update theme by id
  routerThemes.put(
    "/:theme_id",
    upload.single("themeImage"),
    themes.updateTheme
  );
  // Route delete theme by id
  routerThemes.delete("/:theme_id", themes.deleteTheme);

  routerThemes.get(
    "/withTopicsWithQuestionsWithAnswers",
    themes.getThemesWithTopicsWithQuestionsWithAnswers
  );
  routerThemes.use(auth.checkAuthenticated);
  app.use("/themes", routerThemes);
};
