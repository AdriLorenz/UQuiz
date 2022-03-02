// Import Theme Model
const db = require("../models");
const Theme = db.themes;

const fs = require("fs");

// Get all theme
exports.getThemes = async (req, res) => {
  try {
    const theme = await Theme.findAll({ include: [db.topics] });
    res.send(theme);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getOneThemeWithTopics = async (req, res) => {
  try {
    const theme = await Theme.findOne({
      where: { theme_name: req.params.theme_name },
      include: [db.topics],
    });
    res.send(theme);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get theme by id
exports.getThemeById = async (req, res) => {
  try {
    const theme = await Theme.findByPk(req.params.theme_id);
    res.send(theme);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Create a new theme
exports.createTheme = async (req, res) => {
  const themeImagesDir = "\\images\\themes\\";

  try {
    await Theme.create({
      theme_name: req.body.theme_name,
      theme_img_path:
        themeImagesDir + req.file.filename || req.body.theme_img_path,
    });
    res.json({
      message: "Theme Created",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update theme Name
exports.updateThemeName = async (req, res) => {
  try {
    await Theme.update(
      { theme_name: req.body.theme_name },
      { where: { theme_id: req.body.theme_id } }
    );
    res.json("theme updated");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update theme by id
exports.updateTheme = async (req, res) => {
  try {
    if (req.body.theme_img_path)
      fs.unlink(req.body.theme_img_path, (err) => {
        res.status(500).send(err.message);
        return;
      });

    const themeImagesDir = "\\images\\themes\\";

    await Theme.update(
      {
        theme_id: req.body.theme_id,
        theme_name: req.body.theme_name,
        theme_img_path: themeImagesDir + req.file.filename,
      },
      {
        where: {
          theme_id: req.params.theme_id,
        },
      }
    );
    res.json({
      message: "Theme Updated",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete theme by id
exports.deleteTheme = async (req, res) => {
  try {
    const theme = await Theme.findOne({
      where: { theme_id: req.params.theme_id },
    });

    if (theme.theme_img_path) {
      const themeImagesDir = "./public";

      fs.unlink(themeImagesDir + theme.theme_img_path, (err) => {
        if (err !== null) {
          res.status(500).send(err.message);
          return;
        }
      });
    }

    await Theme.destroy({
      where: {
        theme_id: req.params.theme_id,
      },
    });
    res.json({
      message: "Theme Deleted",
    });
  } catch (err) {
    res
      .status(500)
      .send(err.message || "An error occured while deleting the theme");
  }
};
