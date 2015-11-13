var User = require("../models/user");

function usersIndex(req, res){
  User.find({}, function(err, users){
    if (err) return res.render("error", {message: "Something went wrong" + err });
      res.render('users/index', { users: users });
  });
}

function usersNew(req, res){
  res.render("users/new")
}

function usersCreate(req, res){
  var user_params = req.body.user;
  var user = new User(user_params);
  console.log(user_params);
  user.save(function(err){
    if (err) return res.render("error", {message: "Something went wrong" + err });
    return res.redirect('users', { message: "User was created"})

  })
}

function usersShow(req, res){
  var id = req.params.id;

  User.findById({ _id: id }, function(err, user){
    if (err) return res.render("error", {message: "Something went wrong" + err });
      res.render('users/show', { user: user })
  })
}

function usersUpdate(req, res){
  var id = req.params.id;
  var userParams = req.body.user;

  User.findByIdAndUpdate({ _id: id }, userParams, function(err, user) {
    if (err) return res.render("error", { message: "Something went wrong." + err });
    res.redirect('/users');
  })
}

function usersDelete(req, res){
  var id = req.params.id;
  var userParams = req.body.user;

  User.remove({ _id: id }, function(err, user) {
    if (err) return res.render("error", { message: "Something went wrong." + err });
    res.redirect('/users');
  })
}

function usersEdit(req, res){
  var id = req.params.id;
  User.findById({ _id: id }, function(err, user){
    if (err) return res.render("error", {message: "Something went wrong." + err });
      res.render('users/edit', { user: user })
  })
}

module.exports = {
  usersIndex:  usersIndex, 
  usersCreate: usersCreate,
  usersNew:    usersNew,
  usersShow:   usersShow,
  usersUpdate: usersUpdate,
  usersDelete: usersDelete,
  usersEdit:   usersEdit
}