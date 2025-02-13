const express = require("express");
const Nutrition = require("../models/nutrition");
const security = require("../middleware/security");
const User = require("../models/user");
const router = express.Router();


router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
   try {
      const  { user } = res.locals;
      const nutrition = await Nutrition.createNewNutrition({ nutrition: req.body, user});
      res.status(201).json({ nutrition });
   } catch(error) {
      next(error);
   }
});

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
   try {
      const { user } = res.locals;
      console.log(user);
      const nutrition = await Nutrition.listAllNutrition({user});
      return res.status(200).json({ nutrition });
   } catch(error) {
      next(error);
   }
});

router.get("/:nutritionId", security.requireAuthenticatedUser, async (req, res, next) => {
   try {
      //fetch a single nutrition
      const { email } = res.locals.user;
      const user = await User.fetchUserByEmail(email);
      const { nutritionId } = req.params;
      const nutrition = await Nutrition.fetchNutritionById(user.id, nutritionId);
      return res.status(200).json({ nutrition });
   } catch(error) {
      next(error);
   }
});


module.exports = router;