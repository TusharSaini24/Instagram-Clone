const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
// db
const db = require("./dbSetup/dbsetup");

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/api/v1", authRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log("server started at ", PORT);

  setInterval(function () {
    db.query("SELECT 1");
  }, 8000);
});
