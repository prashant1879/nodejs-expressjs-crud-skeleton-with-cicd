let express = require('express');
let router = express.Router();
let CategoriesController = require('../controllers/categories.controller');
let Authentication = require('../helpers/auth.helper');

// Core APIs
router.get('/', Authentication.ensure, CategoriesController.getAll);
router.post('/', Authentication.ensure, CategoriesController.create);
router.get('/:id', Authentication.ensure, CategoriesController.get);
router.put('/:id', Authentication.ensure, CategoriesController.update);
router.delete('/:id', Authentication.ensure, CategoriesController.delete);

module.exports = router;
