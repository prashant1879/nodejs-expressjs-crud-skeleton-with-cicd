require('dotenv').config();

module.exports = {
  apps: [
    {
      name: process.env.APP_NAME,
      port: process.env.PORT,
      sessionPath: './authFolder/whatzappdemo',
      script: './app.js',
      error_file: `./log/${process.env.APP_NAME}-error.log`,
      out_file: `./log/${process.env.APP_NAME}-out.log`,
      log_file: `./log/${process.env.APP_NAME}-combined.log`,
      timeZone: process.env.TIMEZONE || '"Asia/Calcutta"',
      watch: false,
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // Customize the date format in logs
    },
  ],

  // PM2 Log Rotation Configuration
  pm2: {
    logrotate: {
      max_size: '50M', // Rotate log files when they reach 50MB
      retain: 3, // Keep only the last 3 log files
      compress: true, // Compress rotated logs
      dateFormat: 'YYYY-MM-DD', // Set a custom date format for log files
    },
  },
};

//how to start`
// pm2 start ecosystem.config.js
// check logs
// please use log folder
