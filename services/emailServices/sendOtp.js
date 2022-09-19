const nodemailer = require("nodemailer");
const EMAIL_ID = "wenestortesting@gmail.com";
const PASSWORD = "ihndboiopbdupojg";
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  debug: true,
  auth: {
    user: EMAIL_ID,
    pass: PASSWORD,
  },
});

module.exports.sendOtpCode = (name, toemail, otp) => {
  let sendOtpBody = `
    <h1>Welcome To Instagram !</h1>
    <p>dear ${name},your email verification code is  ${otp}.</p>`;

  const mailOptions = {
    from: EMAIL_ID,
    to: toemail,
    subject: "Email Confirmation code ",
    generateTextFromHTML: true,
    html: sendOtpBody,
  };
  transport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
  });
};
