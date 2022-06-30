const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
   try {
      //create a nutrition
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