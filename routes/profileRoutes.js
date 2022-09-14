const router = require("express").Router();
const {
  create,
  getProfileByid,
  getAllProfiles,
} = require("../controllers/profileController");

router.post("/profile", create);
router.get("/profile/:id", getProfileByid);
router.get("/getallprofiles", getAllProfiles);

module.exports = router;
