const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('../app/routes.js');
routes(express, app, bodyParser, path);

module.exports.express = express;
module.exports.app = app;
module.exports.path = path;
module.exports.bodyParser = bodyParser;