const nodeMailerCreds = {
  gmailUser: process.env.GMAIL_USER,
  gmailPassword: process.env.GMAIL_PASSWORD,
  mailer: process.env.MAIL_SENDER,
};
module.exports = { nodeMailerCreds };
