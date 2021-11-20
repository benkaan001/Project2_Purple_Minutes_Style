const router = require("express").Router();
const sequelize = require("../config/connection");
const { Production } = require("../models");

router.get("/", (req, res) => {
  res.render("dashboardhomepage", { layout: "dashboard" });
});

// get all content for the dashboard
router.get("/film", (req, res) => {
  Production.findOne({
    where: {
<<<<<<< HEAD
      production_type: "film",
=======
      production_type: req.params.id, //LEFT OFF HERE, MAYBE DIFF WHERE: TITLE
>>>>>>> 74e23052a49e55565d80122f9b052492a3f0e9c9
    },
    attributes: [
      "id",
      "production_name",
      "production_type",
      "production_dates",
      "production_link",
      "production_description",
    ],
  })
    .then((dbProductionData) => {
      console.log(dbProductionData);
      if (!dbProductionData) {
        res.status(404).json({ message: "No production found." });
        return;
      }

      const production = dbProductionData.get({ plain: true });
      console.log(production);
      res.render("dash_film", {
        layout: "dashboard",
        production,
        // loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/music", (req, res) => {
  Production.findOne({
    where: {
      production_type: "music",
    },
    attributes: [
      "id",
      "production_name",
      "production_type",
      "production_dates",
      "production_link",
      "production_description",
    ],
  })
    .then((dbProductionData) => {
      if (!dbProductionData) {
        res.status(404).json({ message: "No production found." });
        return;
      }

      const production = dbProductionData.get({ plain: true });

      res.render("dash_music", {
        layout: "dashboard",
        production,
        // loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/episodes", (req, res) => {
  Production.findOne({
    where: {
      production_type: "episodes",
    },
    attributes: [
      "id",
      "production_name",
      "production_type",
      "production_dates",
      "production_link",
      "production_description",
    ],
  })
    .then((dbProductionData) => {
      if (!dbProductionData) {
        res.status(404).json({ message: "No production found." });
        return;
      }

      const production = dbProductionData.get({ plain: true });

<<<<<<< HEAD
      res.render("dash_episodes", {
        layout: "dashboard",
=======
      res.render("dash_music.handlebars", {
>>>>>>> 74e23052a49e55565d80122f9b052492a3f0e9c9
        production,
        // loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/editorial", (req, res) => {
  Production.findOne({
    where: {
      production_type: "editorial",
    },
    attributes: [
      "id",
      "production_name",
      "production_type",
      "production_dates",
      "production_link",
      "production_description",
    ],
  })
    .then((dbProductionData) => {
      if (!dbProductionData) {
        res.status(404).json({ message: "No production found." });
        return;
      }

      const production = dbProductionData.get({ plain: true });

      res.render("dash_editorial", {
        layout: "dashboard",
        production,
        // loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
