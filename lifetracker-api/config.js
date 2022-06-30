require("dotenv").config();
require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

const IS_TESTING = process.env.NODE_ENV === "test"
//encodeUri(process.env.DATABASE_PASS)
function getDatabaseUri() {
   const dbUser = process.env.DATABASE_USER || "postgres"
   const dbPass = process.env.DATABASE_PASS ? process.env.DATABASE_PASS : "postgres"
   const dbHost = process.env.DATABASE_HOST || "localhost"
   const dbPort = process.env.DATABASE_PORT || "5432"
   const dbName = process.env.DATABASE_NAME|| "vaccine_hub"

   return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`

}

const BCRYPT_WORK_FACTOR = 13;

console.log("App Config".green)
console.log("PORT:".blue, PORT)
console.log("IS testing:".blue, IS_TESTING)
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database URI:".blue, getDatabaseUri())
console.log("---")

module.exports = {
   PORT,
   BCRYPT_WORK_FACTOR,
   getDatabaseUri
}