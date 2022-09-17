const { addComments } = require("../controllers/commentController");

const router = require("express").Router();

router.post("/addComment", addComments);

module.exports = router;
