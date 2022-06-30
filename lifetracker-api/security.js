const bcrypt = require("bcrypt");

const pw = "password";
bcrypt.hash(pw, 6, (err, hashedPw) => {
   console.log(`password is ${pw}`);
   console.log(`password is ${hashedPw}`);
});