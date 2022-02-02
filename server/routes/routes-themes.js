module.exports = (app) => {
  const themes = require("../controllers/themes-controller");

  const routerThemes = require("express").Router();

  // Route get all themes
  routerThemes.get("/themes", themes.getThemes);
  // Route get theme by id
  routerThemes.get("/themes/:theme_id", themes.getThemeById);
  // Route create a new theme
  routerThemes.post("/themes", themes.createTheme);
  // Route update theme by id
  routerThemes.put("/themes/:theme_id", themes.updateTheme);
  // Route delete theme by id
  routerThemes.delete("/themes/:theme_id", themes.deleteTheme);

  routerThemes.get(
    "/themesWithTopicsWithQuestions",
    themes.getThemesWithTopicAndQuestions
  );

  app.use("/themes", routerThemes);
};
