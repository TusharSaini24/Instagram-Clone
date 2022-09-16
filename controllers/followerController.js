const getQuery = require("../dbSetup/getQuery");

module.exports.addFollower = async (req, res) => {
  const {
    user_id,
    following_user_id,
    following_user_name,
    following_full_name,
    following_profilePic,
  } = req.body;
  try {
    const insert_following = `insert into following set user_id='${user_id}' ,following_user_id='${following_user_id}',following_user_name='${following_user_name}', following_full_name='${following_full_name}',following_profilePic='${following_profilePic}';`;

    const result_insert_following = await getQuery(insert_following);
    console.log("first", result_insert_following);

    return res.status(200).json({
      message: "inserted successfully  ",
      success: true,
      data: {
        following_id: result_insert_following.insertId,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error", success: false, error: error });
  }
};

module.exports.followBack = async (req, res) => {
  try {
    const follow_back = `UPDATE following
    SET followed_back = true
    WHERE user_id ='${req.params.id1}';`;

    const result_follow_back = await getQuery(follow_back);

    const get_user_detail = `select  user.user_id,user.full_name,profile.profilePic ,user.user_name from profile join user on user.user_id = profile.user_id where user.user_id = '${req.params.id1}'`;
    const result_get_user_detail = await getQuery(get_user_detail);

    try {
      const insert_following = `insert into following set user_id='${req.params.id2}' ,following_user_id='${req.params.id1}',following_user_name='${result_get_user_detail[0].user_name}', following_full_name='${result_get_user_detail[0].full_name}',following_profilePic='${result_get_user_detail[0].profilePic}' , followed_back=true;`;

      const result_insert_following = await getQuery(insert_following);
      return res.status(200).json({
        message: "updated successfully  ",
        success: true,
        data: {
          following_id: 1,
        },
      });
    } catch (err) {
      res
        .status(500)
        .json({ msg: "server error", success: false, error: error.stack });
    }
  } catch (error) {
    res
      .status(500)
      .json({ msg: "server error", success: false, error: error.stack });
  }
};
