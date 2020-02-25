const {
  getAllUsers,
  postUser,
  putUser
} = require("../controllers/userController");
const routes = app => {
  app.route("/users").get(getAllUsers);
  app
    .route("/user")
    .post(postUser)
    .put(putUser);
};
module.exports = { routes };
