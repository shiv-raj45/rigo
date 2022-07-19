const nodemailer = require("nodemailer");
const { nodeMailerCreds } = require("./config");
const mailSender = (subject, message) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: nodeMailerCreds.mailer,
      pass: nodeMailerCreds.gmailPassword,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailDetails = {
    from: nodeMailerCreds.mailer,
    to: nodeMailerCreds.mailer,
    subject: subject,
    text: JSON.stringify(message),
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs", err);
    } else {
      console.log("Email sent successfully");
    }
  });
};
module.exports = { mailSender };
