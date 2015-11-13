var mongoose = require('mongoose');
var Project = require('./project.js');

var userSchema = mongoose.Schema({
  name: String,
  class_name: String,
  photo_url: String,
  tag_line: String,
  projects: [Project.schema]
})

module.exports = mongoose.model("User", userSchema);