const bcrypt = require("bcryptjs");
const hashGenerator = (pass) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(pass, 10, function (err, hash) {
      // Store hash in database
      console.log(hash);
      if (err) reject();
      resolve(hash);
    });
  });
};

module.exports = hashGenerator;
