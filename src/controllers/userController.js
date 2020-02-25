const { UserModel } = require("../models/userModel");
const getAllUsers = async (request, response) => {
  try {
    console.log("GET USERS");
    var userInstances = await UserModel.find({});
    console.log("here");
    console.log(userInstances);
    var usersMap = {};
    userInstances.map(user => {
      usersMap[user.id] = user;
    });
    response.send(usersMap);
  } catch (error) {
    response.status(500).send(error);
  }
};
const postUser = async (request, response) => {
  try {
    console.log("POST USER");
    var userInstance = new UserModel(request.body);
    const created = await UserModel.create(userInstance);
    response.send(created);
  } catch (error) {
    response.status(500).send(error);
  }
};
const putUser = async (request, response) => {
  try {
    console.log("PUT USER");
    var userInstance = await UserModel.findOneAndUpdate(
      request.query,
      request.body
    );
    response.send(userInstance);
  } catch (error) {
    response.status(500).send(error);
  }
};
module.exports = { getAllUsers, postUser, putUser };
