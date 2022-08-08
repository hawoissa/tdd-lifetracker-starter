const bcrypt = require("bcrypt");
const db = require("../db");
const { UnauthorizedError, BadRequestError } = require("../utils/errors");
const { BCRYPT_WORK_FACTOR } = require("../config");

class User {
   static async makePublicUser(user) {
      return {
         id: user.id,
         email: user.email,
         username: user.username,
         first_name: user.first_name,
         last_name: user.last_name,
      }
   }

   static async login(creds) {
      const required = ["email", "password"];
      required.forEach(field => {
         if (!creds.hasOwnProperty(field)) {
            throw new BadRequestError(`Missing ${field} in request.`);
         }
      });  

      const user = await User.fetchUserByEmail(creds.email);
      if (user) {
         const isValid = await bcrypt.compare(creds.password, user.password);
         if (isValid) {
            return User.makePublicUser(user);
         }
      }
      throw new UnauthorizedError("Invalid email or password");
   }

   static async register(creds) {
      const required = ["email", "username", "first_name", "last_name", "password", "confirmpassword"];
      required.forEach(field => {
         if (!creds.hasOwnProperty(field)) {
            throw new BadRequestError(`Missing ${field} in request.`);
         }
      });

      if (creds.email.indexOf("@") <= 0) {
         throw new BadRequestError("Invalid email.");
      }

      const existingUser = await User.fetchUserByEmail(creds.email);
      if (existingUser) {
         throw new BadRequestError("Email already exists in database");
      }



      if (creds.password !== creds.confirmpassword) {
         throw new BadRequestError("Passwords don't match.");
      }

      const hashedPassword = await bcrypt.hash(creds.password, BCRYPT_WORK_FACTOR)
      const lowercaseEmail = creds.email.toLowerCase();
      const result = await db.query(`
         INSERT INTO users (
            email, username, first_name, last_name, password
         ) VALUES (
            $1, $2, $3, $4, $5
         ) RETURNING email, username, first_name, last_name, password;
      `, [lowercaseEmail, creds.username, creds.first_name, creds.last_name,
         hashedPassword]); 

      const user = result.rows[0];
      return user;
      //return User.makePublicUser(user);
   }

   static async fetchUserByEmail(email) {
      if (!email) {
         throw BadRequestError("No email provided.");
      }
      const query = `SELECT * FROM users WHERE email = $1`;
      const result = await db.query(query, [email.toLowerCase()]);
      const user = result.rows[0];
      return user;
   }

   // static async fetchUserByUsername(user) {
   //    if (!username) {
   //       throw BadRequestError("No email provided.");
   //    }
   //    const query = `SELECT * FROM users WHERE email = $1`;
   //    const result = await db.query(query, [email.toLowerCase()]);
   //    const user = result.rows[0];
   //    return user;
   // }

}

module.exports = User;