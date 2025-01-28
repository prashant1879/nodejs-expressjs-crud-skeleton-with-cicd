let User = require('../models/user.model');
let Helper = require('../helpers/common.helper');

module.exports = {
  create: async (req, res, next) => {
    User.create(req.body).then(Helper.respondAsJSON(res)).catch(Helper.handleError(res));
  },

  getAll: (req, res, next) => {
    let query = {};

    let paginator = Helper.getPaginator(req);
    paginator.sort = { priority: -1 };
    User.paginate(query, paginator).then(Helper.respondAsJSON(res)).catch(Helper.handleError(res));
  },

  get: (req, res, next) => {
    User.findOne({ _id: req.params.id })
      .then(Helper.respondAsJSON(res))
      .catch(Helper.handleError(res));
  },

  update: (req, res, next) => {
    console.log(req.body);
    User.findOneAndUpdate().then(Helper.respondAsJSON(res)).catch(Helper.handleError(res));
  },

  delete: (req, res, next) => {
    User.remove({ _id: req.params.id })
      .then(Helper.respondAsJSON(res))
      .catch(Helper.handleError(res));
  },

  count: (req, res, next) => {
    User.count({}) //total no. of counts
      .then((counts) => {
        res.status(200).send({ error: false, count: counts });
      })
      .catch(Helper.handleError(res));
  },
};
