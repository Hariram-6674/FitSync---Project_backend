const routes = require("express").Router();
const DietModel = require("../model/DietSchema");

async function create_Calories(req, res) {
  if (!req.body) return res.status(400).json("Post HTTP data not provided");
  const { userID, name, amount, date } = req.body; 

  const Create = new DietModel({
    user_id: userID,
    name: name,
    amount: amount,
    date: date,
  });

  await Create.save(function (err) {
    if (!err) return res.json(Create);
    return res
      .status(400)
      .json({ message: `Error while creating calories ${err}` });
  });
}

async function get_Calories(req, res) {
  let data = await DietModel.find({});
  return res.json(data);
}

async function update_Calorie(req, res) {
  const { name, amount, date } = req.body;
  const itemId = req.params.id;

  try {
    const updatedItem = await DietModel.findByIdAndUpdate(
      itemId,
      { name, amount, date },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: `Error while updating calorie: ${err}` });
  }
}

routes.route("/api/addCalorie").post(create_Calories).get(get_Calories);

routes.route("/api/updateCalorie/:id").put(update_Calorie);

module.exports = routes;
