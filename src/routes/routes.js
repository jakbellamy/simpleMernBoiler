const UserController = require('../controllers/userController');

module.exports = (app) => {
  app.route('/users') //plural to get all and for posting since ID is only assigned ON POST
  .get(UserController.getUsers)
  .post(UserController.addNewUser);

  app.route('/user/:userId') //singular/:id used for when instance ID is known and thats we're referencing a specific instance
  .get(UserController.getUserWithId)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);
};
