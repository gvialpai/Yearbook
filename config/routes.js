var express = require('express'),
    router  = express.Router();

var usersController = require('../controllers/usersController');

// router.route('/users')
//   .get(usersController.usersIndex)
//   .post(usersController.usersCreate)

// router.route('/users/new')
//   .get(usersController.usersNew)

// router.route('/users/:id')
//   .get(usersController.usersShow)
//   .patch(usersController.usersUpdate)
//   .delete(usersController.usersDelete)

// router.route('/users/:id/edit')
//   .get(usersController.usersEdit)

module.exports = router;
