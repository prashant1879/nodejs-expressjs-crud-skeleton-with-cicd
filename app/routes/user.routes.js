let express = require('express');
let router = express.Router();
let UserController = require('../controllers/user.controller');
let Authentication = require('../helpers/auth.helper');

router.get('/', Authentication.ensure, UserController.getAll);
router.get('/count', Authentication.ensure, UserController.count);
router.post('/', Authentication.ensure, UserController.create);
router.get('/:id', Authentication.ensure, UserController.get);
router.put('/:id', Authentication.ensure, UserController.update);
router.delete('/:id', Authentication.ensure, UserController.delete);

module.exports = router;
