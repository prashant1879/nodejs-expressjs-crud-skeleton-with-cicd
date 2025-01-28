/*@auther:Prashant Suthar date:16-10-2019*/
let Category = require('../models/category.model');
//let Product = require('../models/product.model');
let Helper = require('../helpers/common.helper');

module.exports = {
  /**
   * @param req
   * @param res
   * @param next
   * create category
   */
  create: (req, res, next) => {
    Category.create(req.body).then(Helper.respondAsJSON(res)).catch(Helper.handleError(res));
  },

  /****
   * @param req
   * @param res
   * @param next
   * get all categories
   */
  getAll: (req, res, next) => {
    let query = { isDeleted: false, isActive: true };
    if (req.query.hasOwnProperty('search') && req.query.search) {
      let searchText = new RegExp(req.query.search.toLowerCase(), 'i');
      query['$or'] = [
        {
          name: searchText,
        },
        { description: searchText },
      ];
    }

    let paginator = Helper.getPaginator(req);
    paginator.sort = { priority: -1, name: 1 };
    Category.paginate(query, paginator)
      .then(Helper.respondAsJSON(res))
      .catch(Helper.handleError(res));
  },

  /**
   * @param req
   * @param res
   * @param next
   * category get by id
   */
  get: (req, res, next) => {
    Category.findOne({ _id: req.params.id })
      .then(Helper.respondAsJSON(res))
      .catch(Helper.handleError(res));
  },

  /**
   * @param req
   * @param res
   * @param next
   * update category by id
   */
  update: (req, res, next) => {
    Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(Helper.respondAsJSON(res))
      .catch(Helper.handleError(res));
  },

  /***
   * @param req
   * @param res
   * @param next
   * delete category but if category exist in any product category can't be delete
   */
  delete: (req, res, next) => {
    /*    Product.find({categories: req.params.id})
      .then(product=> {
        if(product.length>0) {
          res.status(200).send({error: true, message: "Cannot delete category. One or more products exists under this category."});
        } else {*/
    Category.remove({ _id: req.params.id })
      .then(Helper.respondAsJSON(res))
      .catch(Helper.handleError(res));
    /*      }
      });*/
  },
};
