const routes = require("express").Router();
const WorkoutModel = require("../model/WorkoutSchema");

async function create_Exercise(req, res) {
  if (!req.body) return res.status(400).json("Post HTTP data not provided");
  const { userID, name, amount, duration, date } = req.body;

  const Create = new WorkoutModel({
    user_id: userID,
    name: name,
    amount: amount,
    duration: duration,
    date: date,
  });

  await Create.save(function (err) {
    if (!err) return res.json(Create);
    return res
      .status(400)
      .json({ message: `Error while creating exercise ${err}` });
  });
}

//get request
async function get_Exercise(req, res) {
  let data = await WorkoutModel.find({});
  return res.json(data);
}

async function update_Exercise(req, res) {
  const { name, amount, duration, date } = req.body;
  const itemId = req.params.id;

  try {
    const updatedItem = await WorkoutModel.findByIdAndUpdate(
      itemId,
      { name, amount, duration, date },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: `Error while updating exercise: ${err}` });
  }
}

routes.route("/api/addExercise").post(create_Exercise).get(get_Exercise);

routes.route("/api/updateExercise/:id").put(update_Exercise);

module.exports = routes;
