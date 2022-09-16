const router = require("express").Router();
const {
  addFollower,
  followBack,
} = require("../controllers/followerController");

router.post("/addFollower", addFollower);
router.get("/followBack/:id1/:id2", followBack);

module.exports = router;
