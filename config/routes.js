var express = require('express'),
    router  = express.Router();

var usersController = require('../controllers/usersController');
var projectsController = require('../controllers/projectsController');

router.route('/users')
  .get(usersController.usersIndex)
  .post(usersController.usersCreate)

router.route('/users/new')
  .get(usersController.usersNew)

router.route('/users/:id')
  .get(usersController.usersShow)
  .patch(usersController.usersUpdate)
  .delete(usersController.usersDelete)

router.route('/users/:id/edit')
  .get(usersController.usersEdit)

//Divider LOl####$$$$$$%$%%%%#U(@*$(U#()RUUOPIFOIJFNKJDNBFKJJKELHIOR#HO*RYFH)

router.route('/projects')
  .get(projectsController.projectsIndex)
  .post(projectsController.projectsCreate)

router.route('/projects/new')
  .get(projectsController.projectsNew)

router.route('/projects/:id')
  .get(projectsController.projectsShow)
  .patch(projectsController.projectsUpdate)
  .delete(projectsController.projectsDelete)

router.route('/projects/:id/edit')
  .get(projectsController.projectsEdit)  

module.exports = router;
