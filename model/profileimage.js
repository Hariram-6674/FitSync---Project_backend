const mongoose = require("mongoose");

const PicSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "login",
      required: true,
    },
    image:String,
    cloudinary_id:String
  },
  {
    collection: "Pic",
  }
);

const ProfileModel = mongoose.model("Pic", PicSchema);
module.exports = ProfileModel;
