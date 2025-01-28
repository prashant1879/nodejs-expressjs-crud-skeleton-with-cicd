'use strict';

let userRoutes = require('./app/routes/user.routes');
let categoriesRoutes = require('./app/routes/categories.routes');
module.exports = (app) => {
  app.use('/api/v1/user', userRoutes);
  app.use('/api/v1/categories', categoriesRoutes);
};