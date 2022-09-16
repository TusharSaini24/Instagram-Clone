const router = require("express").Router();
const {
  create,
  getProfileByid,
  getAllProfiles,
  update,
} = require("../controllers/profileController");

router.post("/profile", create);
router.post("/updateProfile", update);
router.get("/profile/:id", getProfileByid);
router.get("/getallprofiles", getAllProfiles);

module.exports = router;
