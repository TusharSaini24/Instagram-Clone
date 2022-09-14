const getQuery = require("../dbSetup/getQuery");
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "hydra123",
  api_key: "335986569295115",
  api_secret: "8cTN6wy23WH0k4U-GYd19dNMU48",
});
module.exports.create = async (req, res) => {
  const { user_id, full_name, bio, website, profilePic } = req.body;
  if (!(user_id && full_name && bio && website && profilePic)) {
    res.status(400).json({ msg: "Flelds not present", succuss: false });
  }
  try {
    const profile_pic = await cloudinary.uploader.upload(profilePic);
    const insert_profile = `insert into profile set user_id ='${user_id}', full_name = '${full_name}', bio ='${bio}', website='${website}',profilePic='${profile_pic.url}'`;
    const results = await getQuery(insert_profile);
    results &&
      res.status(201).json({
        msg: "profile created successfully",
        success: true,
        data: results,
      });
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ msg: "server error", success: false, error: error.stack });
  }
};

module.exports.getProfileByid = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const getProfilebyid = `select * from profile where user_id ='${id}' ;`;
    const results = await getQuery(getProfilebyid);
    results &&
      res.status(201).json({
        msg: "fatch successfully",
        success: true,
        data: results,
      });
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ msg: "server error", success: false, error: error.stack });
  }
};
module.exports.getAllProfiles = async (req, res) => {
  try {
    const getAllProfiles = `select profile.full_name ,profile.bio,profile.website,profile.profilePic ,user.user_name from profile join user on user.user_id = profile.user_id ;`;
    const results = await getQuery(getAllProfiles);
    results &&
      res.status(201).json({
        msg: "fatch all profiles successfully",
        success: true,
        data: results,
      });
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ msg: "server error", success: false, error: error.stack });
  }
};
