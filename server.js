const express = require("express");
const app = express();
const cors = require("cors");

// routes
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const followerRoutes = require("./routes/followerRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const likeRoutes = require("./routes/likeRoutes");

// db
const db = require("./dbSetup/dbsetup");

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/api/v1", authRoutes);
app.use("/api/v1", profileRoutes);
app.use("/api/v1", followerRoutes);
app.use("/api/v1", postRoutes);
app.use("/api/v1", commentRoutes);
app.use("/api/v1", likeRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log("server started at ", PORT);

  setInterval(function () {
    db.query("SELECT 1");
  }, 8000);
});
