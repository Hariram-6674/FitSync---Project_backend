const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema(
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
    duration: {
      type: Number,
      required: false,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    collection: "workout",
  }
);

const WorkoutModel = mongoose.model("workout", WorkoutSchema);
module.exports = WorkoutModel;
