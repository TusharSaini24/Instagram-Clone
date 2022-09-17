const cloudinary = require("cloudinary");
const getQuery = require("../dbSetup/getQuery");
cloudinary.config({
  cloud_name: "hydra123",
  api_key: "335986569295115",
  api_secret: "8cTN6wy23WH0k4U-GYd19dNMU48",
});

module.exports.addPost = async (req, res) => {
  const { user_id, post_photo } = req.body;
  if (!post_photo) {
    return res.status(400).json({ msg: "Fields not present", success: false });
  }
  try {
    const postPhoto = await cloudinary.uploader.upload(post_photo);

    const insert_post = `insert into post set user_id='${user_id}',post_photo='${
      postPhoto.url
    }',caption='${req.body.caption || null}'`;
    const result_insert_post = await getQuery(insert_post);

    res.status(200).json({
      msg: " post inserted successfully",
      success: true,
      data: result_insert_post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error", success: false, error: error });
  }
};
