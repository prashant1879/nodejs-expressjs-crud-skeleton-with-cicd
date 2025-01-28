'use strict';

let dotenv = require('dotenv');
dotenv.config();
let express = require('express');
let app = express();

let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let Promise = require('bluebird');
let config = require(`./config/${process.env.NODE_ENV}.js`);
let compression = require('compression');
const error = require('./app/helpers/error');
let port = process.env.PORT;

require('./app/helpers/logging')();
require('./app/helpers/validation')();
mongoose.Promise = Promise;
let mongoOptions = {
  useMongoClient: true,
  poolSize: process.env.POOL_SIZE,
};
// console.log('Mongo Options: ', mongoOptions);
// console.log('config.database.URI,', config.database.URI);
// console.log('config.mongoOptions.URI,', mongoOptions);
// mongoose.connect(config.database.URI, mongoOptions);

// app.use(cors());
app.use(bodyParser.urlencoded(config.bodyParser.urlencoded));
app.use(bodyParser.json(config.bodyParser.json));
app.use(compression());
app.use(express.static(__dirname + '/public'));

require('./routes.js')(app);
app.use(error);
app.listen(port);

if (config.scheduler.enable) {
  scheduler.start();
}

console.log(`${process.env.APP_NAME} start on PORT: ` + port);
