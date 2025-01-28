'use strict';

let mongoose = require('bluebird').promisifyAll(require('mongoose'));
let Schema = mongoose.Schema;
let autopopulate = require('mongoose-autopopulate');
let paginate = require('mongoose-paginate');

let User = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    sureName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

User.plugin(autopopulate);
User.plugin(paginate);

module.exports = mongoose.model('User', User);
