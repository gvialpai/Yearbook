var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
  name: String,
  description: String,
  photo_url: String,
  link: String
})

module.exports = mongoose.model("Project", projectSchema);