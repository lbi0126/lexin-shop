var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


// Ref: https://stackoverflow.com/questions/29852208/best-practice-for-structuring-express-routes-that-handle-mongodb-queries
router.route('/users')
  .post(controller.create)
  .get(controller.listAll);

router.route('/users/:id')
  .get(controller.getById)
  .delete(controller.remove);

module.exports = router;
