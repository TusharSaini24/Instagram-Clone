const { addLikes } = require("../controllers/likeController");

const router = require("express").Router();

router.post("/addLike", addLikes);

module.exports = router;
