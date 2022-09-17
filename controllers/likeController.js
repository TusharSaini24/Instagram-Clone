const getQuery = require("../dbSetup/getQuery");

module.exports.addLikes = async (req, res) => {
  const { user_id, post_id } = req.body;
  if (!(user_id, post_id)) {
    return res
      .status(400)
      .json({ msg: "field are not present ", success: false });
  }
  try {
    const insert_like = `insert into likes set user_id = '${user_id}' , post_id='${post_id}' , isLiked='true';`;
    const result_insert_like = await getQuery(insert_like);

    return res.status(200).json({
      msg: "like inserted successfully ",
      success: true,
      data: { like_id: result_insert_like.insertId },
    });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "server error", success: false, error: error.stack });
  }
};
