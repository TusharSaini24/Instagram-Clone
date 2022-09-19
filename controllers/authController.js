const getQuery = require("../dbSetup/getQuery");
const hashGenerator = require("../services/hash/hashGenerator");
const hashComparator = require("../services/hash/hashComparator");
const jwt = require("jsonwebtoken");
const { getTestMessageUrl } = require("nodemailer");
const { sendOtpCode } = require("../services/emailServices/sendOtp");
module.exports.register = async (req, res) => {
  const { full_name, user_name, email, password, dob } = req.body;
  if (!(full_name, user_name && email && password && dob))
    return res.status(400).json({ msg: "Fields not present", success: false });

  try {
    const emailExist = `select * from user where email='${email}';`;
    const result_emailExist = await getQuery(emailExist);
    if (result_emailExist.length > 0) {
      return res
        .status(400)
        .json({ message: "email already exist ", success: false });
    }

    const user_nameExist = `select * from user where user_name = '${user_name}';`;
    const result_user_nameExist = await getQuery(user_nameExist);
    if (result_user_nameExist.length > 0) {
      return res
        .status(400)
        .json({ message: "user name already exist ", success: false });
    }

    const hashedPassword = await hashGenerator(password);

    const insert_user = `insert into user set full_name = '${full_name}' ,email = '${email}' , user_name = '${user_name}' , password='${hashedPassword}',dob = '${dob}' ;`;

    const result_insert_user = await getQuery(insert_user);
    const getUser = `select user_id ,full_name , email , user_name , dob from user where user_id = '${result_insert_user.insertId}';`;
    const result_getUser = await getQuery(getUser);

    return res.status(200).json({
      message: "user succefully inserted ",
      success: true,
      data: { ...result_getUser },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "server error ", success: false, error: err });
  }
};

module.exports.login = async (req, res) => {
  const password = req.body.password;
  const user_name = req.body.user_name ? req.body.user_name : undefined;
  const email = req.body.email ? req.body.email : undefined;

  if (!((user_name || email) && password))
    return res.status(400).json({ msg: "Fields not present", success: false });

  try {
    let result_emailExist, result_user_nameExist;
    if (email) {
      const emailExist = `select * from user where email='${email}';`;
      result_emailExist = await getQuery(emailExist);

      if (result_emailExist.length === 0) {
        return res
          .status(401)
          .json({ message: "no email  exist ", success: false });
      }
    } else if (user_name) {
      const user_nameExist = `select * from user where user_name = '${user_name}';`;
      result_user_nameExist = await getQuery(user_nameExist);
      if (result_user_nameExist.length === 0) {
        return res
          .status(401)
          .json({ message: "no such exist ", success: false });
      }
    }

    const hashedPassword = await hashComparator(
      password,
      result_emailExist[0].password || result_user_nameExist[0].password
    );

    if (!hashedPassword) {
      return res
        .status(401)
        .json({ message: "password/email is matched ", success: false });
    }

    const userData = {
      user_id: result_emailExist[0].user_id || result_user_nameExist[0].user_id,
      full_name:
        result_emailExist[0].full_name || result_user_nameExist[0].full_name,
      user_name:
        result_emailExist[0].user_name || result_user_nameExist[0].user_name,
      dob: result_emailExist[0].dob || result_user_nameExist[0].dob,
    };

    const userToken = await getAuthToken(userData);
    userData["token"] = userToken;
    return res.status(200).json({
      message: "user logged in succefully  ",
      success: true,
      data: userData,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "server error ", success: false, error: err.stack });
  }
};

module.exports.sendOtp = async (req, res) => {
  const { email, user_name } = req.body;
  if (!(email && user_name)) {
    return res
      .status(401)
      .json({ message: "fields are not present ", success: false });
  }
  try {
    let otpcode = Math.floor(Math.random() * 10000 + 1);
    sendOtpCode(user_name, email, otpcode);
    return res.status(200).json({
      message: "otp has send successfully ",
      success: true,
      data: {
        otpCode: otpcode,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error ", success: false, error: error });
  }
};

const getAuthToken = (data) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ data }, "secretkey", (err, token) => {
      console.log(data);
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};
