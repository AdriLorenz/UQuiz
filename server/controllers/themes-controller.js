// Import Theme Model
const db = require("../models");
const Theme = db.themes;

// Get all theme
exports.getThemes = async (req, res) => {
  try {
    const theme = await Theme.findAll();
    res.send(theme);
  } catch (err) {
    console.log(err);
  }
};

exports.getThemesWithTopicAndQuestions = async (req, res) => {
  try {
    const theme = await Theme.findAll({
      include: [{ model: db.topics, include: { model: db.questions } }],
    });
    res.send(theme);
  } catch (error) {
    console.log(error);
  }
};

exports.getThemeWithTopics = async (req, res) => {
  try {
    const theme = Theme.findOne({
      where: { topic_id: req.params.topic_id },
      include: [db.topics],
    });
    res.send(theme);
  } catch (error) {
    console.log(error);
  }
};

exports.returnThemes = async (req, res) => {
  try {
    const theme = await Theme.findAll();
    return theme;
  } catch (err) {
    console.log(err);
  }
};

// Get theme by id
exports.getThemeById = async (req, res) => {
  try {
    const theme = await Theme.findByPk(req.params.theme_id);
    res.send(theme);
  } catch (err) {
    console.log(err);
  }
};

// Create a new theme
exports.createTheme = async (req, res) => {
  try {
    await Theme.create(req.body);
    res.json({
      message: "Theme Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update theme by id
exports.updateTheme = async (req, res) => {
  try {
    await Theme.update(req.body, {
      where: {
        theme_id: req.params.theme_id,
      },
    });
    res.json({
      message: "Theme Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete theme by id
exports.deleteTheme = async (req, res) => {
  try {
    await Theme.destroy({
      where: {
        theme_id: req.params.theme_id,
      },
    });
    res.json({
      message: "Theme Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
