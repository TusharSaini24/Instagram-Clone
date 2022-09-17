const getQuery = require("../dbSetup/getQuery");

module.exports.addComments = async (req, res) => {
  const { user_id, post_id, text } = req.body;
  if (!(user_id && post_id && text)) {
    return res
      .status(400)
      .json({ msg: "field are not present ", success: false });
  }
  try {
    const insert_comment = `insert into comments set user_id='${user_id}', post_id='${post_id}',text='${text}'`;

    const result_insert_comment = await getQuery(insert_comment);

    res.status(200).json({
      msg: " comment inserted successfully",
      success: true,
      data: { comment_id: result_insert_comment.insertId },
    });
  } catch (err) {
    console.log(error);
    res.status(500).json({ msg: "server error", success: false, error: error });
  }
};
