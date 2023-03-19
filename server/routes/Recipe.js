const express = require("express");
const router = express.Router();
const Recipe = require("../model/RecipeSchema");
const FetchDetails = require("../middleware/FetchingDetails");
router.post("/saved", FetchDetails, async (req, res) => {
  const { name, url, area, category, ingredient, quantity, method, id } =
    req.body;
  const already_exist = await Recipe.findOne({ user: req.User.id, Id: id });
  if (already_exist) {
    res.status(403).json({ error: "Cannot add the same Recipe" });
  } else {
    try {
      const ice = await Recipe.create({
        Name: name,
        Url: url,
        Category: category,
        Unique: id,
        user: req.User.id,
      });
      res.status(200).json({ice})
    } catch (error) {
      res.status(406).json({ error });
    }
  }
});
router.get("/get", FetchDetails, async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.User.id });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
