'use strict';

let ip = require('ip');

module.exports = {
  database: {
    URI: 'mongodb://localhost:27017/sample-project-production',
  },
  bodyParser: {
    urlencoded: { limit: '50mb', extended: true, parameterLimit: 50000 },
    json: { limit: '50mb' },
  },
  scheduler: {
    enable: false,
    period: 1, //In Seconds
  },

  threshold: {
    docsLimit: 500000,
  },
};
