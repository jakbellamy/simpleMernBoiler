const _ = require('lodash');
const User = require('../models/user.js');

exports.addNewUser = async(req, res) => {
  let user = await User.findOne({username: req.body.username}); //Step 1 to validate against duplicate users
  if(user){
    res.send({errMsg: "A user with that name already exists.", succes: false}) //Step 2 to validate against duplicate users
  };
  user = new User(_.pick(req.body, ['username', 'password', 'displayName', 'age'])); //creates new user instance. I use lodash _.pick because its less ugly
  await user.save(); //async code that saves our User instance to our DB
  res.send({user: user, success: true}) //sends an object with nested object of new user instance and a success attribute marked true
};

exports.getUsers = (req, res) => {
  User.find((err, users) => { //boiler plate method for finding User/error handling. gonna keep using this for the other Controller methods
    if(err){
      res.send(err);
    };
    res.send({users: users});
  });
};

exports.getUserWithId = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if(err){
      res.send(err);
    };
    res.json(user);
  });
};

exports.updateUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.userId}, req.body, {new: true}, (err, user) => {
    if(err){
      res.send(err);
    };
    res.json(user);
  });
};

exports.deleteUser = (req, res) => {
  User.remove({ _id: req.params.userId}, (err, user) => {
    if(err){
      res.send(err)
    };
    res.json({msg: 'Successfully deleted user.'})
  });
};
