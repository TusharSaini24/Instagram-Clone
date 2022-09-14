const db = require("./dbsetup");
const getQuery = (query) => {
  console.log(query);
  return new Promise((resolve, reject) => {
    db.query(query, (err, data) => {
      if (err) {
        reject(err.message);
      } else resolve(data);
    });
  });
};

module.exports = getQuery;
