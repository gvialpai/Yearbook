var mongoose        = require('mongoose');

var databaseUrl     = 'mongodb://localhost:27017/yearbook';
mongoose.connect(databaseUrl);

var User           = require('../models/user');
var Project        = require('../models/project');

function saveToDb(err, user){
  if (err) console.log(err);
  console.log("User saved " + user)
}

var projectOne = {
    name: "MeEmoji",
    description: "Memorize Emojis",
    photo_url: "http://i2.wp.com/venturebeat.com/wp-content/uploads/2015/09/tesla-model-x.jpg?fit=930%2C9999",
    link: "http://venturebeat.com/page/3/"
}

var projectTwo = {
  name: "Guus Who",
  description: "Guess who Guss is",
  photo_url: "http://i2.wp.com/venturebeat.com/wp-content/uploads/2015/09/tesla-model-x.jpg?fit=930%2C9999",
  link: "http://venturebeat.com/page/3/"
}


var projectThree = {
  name: "PianoCube",
  description: "Learn Music",
  photo_url: "http://i2.wp.com/venturebeat.com/wp-content/uploads/2015/09/tesla-model-x.jpg?fit=930%2C9999",
  link: "http://venturebeat.com/page/3/"
}

var users = [
  {
    name: "Calum",
    class_name: "Boolean",
    photo_url: "http://cdn.buzznet.com/assets/users16/deathofanightmare/default/emo-kid--large-msg-118002196691.jpg",
    tag_line: "sk8 or die m8",
    projects: [projectOne]

  },
  {
    name: "Guus",
    class_name: "Boolean",
    photo_url: "http://images2.fanpop.com/images/photos/8200000/Austin-Powers-Goldmember-austin-powers-8220458-852-480.jpg",
    tag_line: "Goldmember",
    projects: [projectTwo, projectOne]
  },
  {
    name: "Guillaume",
    class_name: "Array",
    photo_url: "http://www.voyagesphotosmanu.com/Complet/images/guy_verhofstadt_belgium.jpg",
    tag_line: "Weirdo",
    projects: [projectThree]

  }
]

users.forEach(function(user, index){
  var newUser = new User(user);
  newUser.save(saveToDb);
})
