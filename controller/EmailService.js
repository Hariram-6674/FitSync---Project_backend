const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', 
  port: 587, 
  secure: false, 
  auth: {
    user: 'fitsync.react@outlook.com', 
    pass: 'Fitsync1', 
  },
});

module.exports = transporter;
