var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
  name: String,
  description: String,
  photo_url: String,
  link: String,
  user_id: String
})

module.exports = mongoose.model("Project", projectSchema);