require("dotenv").config();
const cloudinary = require('cloudinary').v2;
          
cloudinary.config({ 
  cloud_name: process.env.cloudname, 
  api_key: process.env.cloudpi, 
  api_secret: process.env.cloudsec 
});

module.exports = cloudinary;