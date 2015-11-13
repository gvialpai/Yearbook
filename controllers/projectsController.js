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
  var project_params = req.body.project;
  var project = new Project(project_params);
  console.log(project_params);
  project.save(function(err){
    if (err) return res.render("error", {message: "Something went wrong" + err });
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