const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', 
  port: 587, 
  secure: false, 
  auth: {
    user: process.env.userm, 
    pass: process.env.passwm, 
  },
});

module.exports = transporter;
