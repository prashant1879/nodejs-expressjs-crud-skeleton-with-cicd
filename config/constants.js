'use strict';

module.exports = {
  secret: 'THIS-SECRET-NEEDS-TO-BE-CHANGE',
  baseDomain: 'https://SAMPLE-PROJECT-WEBSITE.COM/',
  apiDomain: 'https://api.SAMPLE-PROJECT-WEBSITE.COM/',
  dateFormat: 'YYYY-MM-DD',
  timeFormat: 'h:mm:s a',
  dateTimeFormat: 'YYYY-MM-DD h:mm:s a',
  timeZone: 'Asia/Calcutta',
  secretKey: 'THIS-SECRET-NEEDS-TO-BE-CHANGE',
  redisconf: {
    dbPort: process.env.REDIS_PORT,
    debug: false,
    dbHost: process.env.REDIS_HOST,
    dbOptions: {
      auth_pass: process.env.REDIS_AUTH_KEY,
      no_ready_check: true,
    },
  },
};
