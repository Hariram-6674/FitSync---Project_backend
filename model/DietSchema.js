const mongoose = require("mongoose");

const DietSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "login", 
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    amount: {
      type: Number,
      required: false,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    collection: "calories",
  }
);

const DietModel = mongoose.model("calories", DietSchema);
module.exports = DietModel;
