const db = require("../db");
const { BadRequestError, NotFoundError} = require("../utils/errors");

class Nutrition {
   static async listAllNutrition(userId) {
      const results = await db.query (
         `
         SELECT n.id,
                n.category,
                n.calories,
                n.image_url,
                n.user_id,
                u.email,
                n.created_at
         FROM nutrition AS n
            LEFT JOIN users AS u ON u.id = n.user_id
         WHERE n.user_id = $1
         ORDER BY n.created_at DESC
         `, [userId] 
      )  
      return results.rows;
   }

   static async fetchNutritionById(userId, nutritionId) {
      const results = await db.query (
         `
         SELECT n.id,
                n.category,
                n.calories,
                n.image_url,
                n.user_id,
                u.email,
                n.created_at
         FROM nutrition AS n
            JOIN users AS u ON u.id = n.user_id
         WHERE n.id = $1 AND n.user_id = $2
         `, [nutritionId, userId] 
      )
      const nutrition = results.rows[0];
      if (!nutrition) {
         throw new NotFoundError("Doesn't exist.");
      }   
      return nutrition;
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