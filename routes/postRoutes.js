const { addPost } = require("../controllers/postController");

const router = require("express").Router();

router.post("/addPost", addPost);

module.exports = router;
