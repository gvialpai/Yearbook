var Project = require("../models/project");
var User    = require("../models/user")

function projectsIndex(req, res){
  Project.find({}, function(err, projects){
    if (err) return res.render("error", {message: "Something went wrong" + err });
      res.render('projects/index', { projects: projects });
  });
}

function projectsNew(req, res){
  User.find({}, function(err, users){
    if (err) return res.render("error", {message: "Something went wrong" + err });
    res.render('projects/new', { users: users})
  });
}

function projectsCreate(req, res){
  var projectParams = req.body.project;
  var project = new Project(projectParams);
  console.log(projectParams);
  project.save(function(err){
    if (err) return res.render("error", {message: "Something went wrong" + err });
    var id = req.body.user.id;
    User.findById(id, function(err, user){
       var projectArray = user.projects;
       projectArray.push(projectParams);
       user.save()
    })
    return res.redirect('projects', { message: "project was created"})
  })
}

function projectsShow(req, res){
  var id = req.params.id;

  Project.findById({ _id: id }, function(err, project){
    if (err) return res.render("error", {message: "Something went wrong" + err });
      res.render('projects/show', { project: project })
  })
}

function projectsUpdate(req, res){
  var id = req.params.id;
  var projectParams = req.body.project;

  Project.findByIdAndUpdate({ _id: id }, projectParams, function(err, project) {
    if (err) return res.render("error", { message: "Something went wrong." + err });
    res.redirect('/projects');
  })
}

function projectsDelete(req, res){
  var id = req.params.id;
  var projectParams = req.body.project;

  Project.remove({ _id: id }, function(err, project) {
    if (err) return res.render("error", { message: "Something went wrong." + err });
    res.redirect('/projects');
  })
}

function projectsEdit(req, res){
  var id = req.params.id;
  Project.findById({ _id: id }, function(err, project){
    if (err) return res.render("error", {message: "Something went wrong." + err });
      res.render('projects/edit', { project: project })
  })
}

module.exports = {
  projectsIndex:  projectsIndex, 
  projectsCreate: projectsCreate,
  projectsNew:    projectsNew,
  projectsShow:   projectsShow,
  projectsUpdate: projectsUpdate,
  projectsDelete: projectsDelete,
  projectsEdit:   projectsEdit
}