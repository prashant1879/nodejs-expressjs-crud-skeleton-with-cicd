'use strict';

let config = require(`../../config/${process.env.NODE_ENV}.js`);
let alphanumeric = require('alphanumeric-id');

module.exports = {
  getPaginator: (req) => {
    let filter = {};
    filter.limit = 10;
    if (req.query.hasOwnProperty('limit')) {
      if (req.query.limit === '-1') {
        req.query.limit = config.threshold.docsLimit;
      }
      filter.limit = parseInt(req.query.limit);
    }
    filter.page = req.query.hasOwnProperty('page') ? Number(req.query.page) : 1;

    if (req.query.hasOwnProperty('sort')) {
      let arr = req.query.sort.split('-');
      filter.sort = {};
      if (arr.length === 2) {
        filter.sort[arr[1]] = -1;
      } else {
        filter.sort[arr[0]] = 1;
      }
    } else if (req.query.hasOwnProperty('sortBy')) {
      filter.sort = eval('(' + req.query.sortBy + ')');
    } else {
      filter.sort = { updatedAt: -1 };
    }

    filter.select = '-__v';
    return filter;
  },

  /**
   * Responds client with JSON response
   * @param res
   * @param statusCode
   * @returns {function(*=)}
   */
  respondAsJSON: (res, statusCode) => {
    statusCode = statusCode || 200;
    return (items) => {
      res.status(statusCode).json(items);
    };
  },

  /**
   * Handles error
   * @param res
   * @param statusCode
   * @returns {function(*=)}
   */
  handleError: (res, statusCode) => {
    statusCode = statusCode || 500;
    return (err) => res.status(statusCode).send(err);
  },

  /**
     * Generate Transaction Id
     * @param prefix
     * @returns String

     */
  generateModelId: (prefix = 'ORD') => {
    let rand = require('unique-random')(1000000000, 9999999999);
    return prefix + rand();
    //return prefix + (Math.floor(new Date().getTime() + Math.random())).toString();// + (Math.floor(Math.random()*90) + 10).toString();
  },

  /**
     * Generate Transaction Id
     * @param prefix
     * @returns String

     */
  generateAlphanumericId: (prefix = 'ORD') => {
    let rand = require('unique-random')(1000 /*000000*/, 9999 /*999999*/);
    return (prefix + rand() + alphanumeric(4).toString()).toUpperCase();
    //return prefix + (Math.floor(new Date().getTime() + Math.random())).toString();// + (Math.floor(Math.random()*90) + 10).toString();
  },

  /**
     * Array Contains Function
     * @param array
     * @param value
     * @returns Boolean

     */
  contains: (array, value) => {
    if (array) {
      return array.indexOf(value) > -1;
    } else {
      return false;
    }
  },

  /**
     * Push Unique Value in Array
     * @param array
     * @param value
     * @returns Boolean

     */
  pushUnique: (array, value) => {
    if (array.indexOf(value) === -1) {
      array.push(value);
    }
  },

  isJSON: (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  },

  /**
     * get object
     * @param obj
     * @returns Object

     */
  getObject: (obj) => {
    if (obj && obj !== undefined && obj !== null) {
      if (Array.isArray(obj) && obj.length === 0) return null;
      else return obj;
    } else {
      return null;
    }
  },
};
