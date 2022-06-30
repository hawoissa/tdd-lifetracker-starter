const express = require("express");
const Nutrition = require("../models/nutrition");
const security = require("../middleware/security");
const router = express.Router();


router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
   try {
      const  { user } = res.locals;
      const nutrition = await Nutrition.createNewNutrition({ user, nutrition: req.body});
      res.status(201).json({ nutrition });
   } catch(error) {
      next(error);
   }
});

router.get("/", async (req, res, next) => {
   try {
      //list all nutrition
   } catch(error) {
      next(error);
   }
});

router.get("/:nutritionId", async (req, res, next) => {
   try {
      //fetch a single nutrition
   } catch(error) {
      next(error);
   }
});


module.exports = router;