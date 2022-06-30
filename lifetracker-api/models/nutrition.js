const db = require("../db");
const { BadRequestError, NotFoundError} = require("../utils/errors");

class Nutrition {
   static async listAllNutrition() {

   }

   static async fetchNutritionById(nutritionId) {
      
   }

   static async createNewNutrition({ nutrition, user }) {
      const required = ["name", "category", "calories", "image_url"];
      required.forEach(field => {
         if (!nutrition.hasOwnProperty(field)) {
            throw new BadRequestError(`Missing ${field} in request.`);
         }
      });

      const result = await db.query(`
         INSERT INTO nutrition (
            name, category, calories, image_url, user_id
         ) VALUES (
            $1, $2, $3, $4, (SELECT id FROM users WHERE email=$5)
         ) RETURNING id, name, category, calories, 
         image_url AS imageUrl, user_id AS userId, created_at AS createdAt;
      `, [ nutrition.name, nutrition.category, nutrition.calories, nutrition.image_url, user.email]);

      return result.rows[0];
   }
}

module.exports = Nutrition;