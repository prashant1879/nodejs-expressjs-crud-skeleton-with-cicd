'use strict';
let Helper = require('../helpers/common.helper');
let constants = require(`../../config/${process.env.CONST_FILE}.js`);
let request = require('request-promise');
let jwt = require('jsonwebtoken');
// let UserDeviceInformation = require('../models/userDeviceInformation.model');

function getAccessTokenFromHeader(req) {
  return req.headers['authorization'] && req.headers['authorization'] !== null
    ? req.headers['authorization'].split(' ')[1]
    : null;
}

function getAccessTokenFromUrl(req) {
  return req.query.hasOwnProperty('Authorization') &&
    Helper.getObject(req.query.Authorization) !== null
    ? req.query.Authorization
    : null;
}

module.exports = {
  /**
   * Get Token from Request Header
   * @param req
   * @returns String
   
   */
  getAccessToken: (req) => {
    return getAccessTokenFromHeader(req) || getAccessTokenFromUrl(req);
  },

  /**
   * OAuth 2 Token Validation
   * @param req
   * @param res
   * @param next
   * @returns Boolean

   */
  ensure: (req, res, next) => {
    let tokenfromheader = getAccessTokenFromHeader(req) || getAccessTokenFromUrl(req);
    let tokenErr = {};
    let response = {};

    // UserDeviceInformation.findOne({
    //   token: tokenfromheader,
    // }).then(
    //   response => {
    //      if(response){
    //        next();
    //      }else{
    //       res.status(401).send({
    //         status: false,
    //         message: 'UnAthorize access.',
    //         data: '',
    //     });
    //      }
    //   }
    // ).catch(Helper.handleError(res));
  },
};
