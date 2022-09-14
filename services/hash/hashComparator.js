const bcrypt = require("bcryptjs");
const hashComparator = (pass, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pass, hash, function (err, res) {
      // Passwords don't match
      resolve(res);
    });
  });
};

module.exports = hashComparator;
