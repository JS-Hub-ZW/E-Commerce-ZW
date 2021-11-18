
const express = require('express');
const path = require('path');

const generalMiddleware = require('./src/middleware/general')
const apiRoutesMiddleware = require('./src/middleware/apiRoutes')
const webRoutesMiddleware = require('./src/middleware/webRoutes')
const errorHandlingMiddleware = require('./src/middleware/errorHandling')

const connectDB = require('./src/config/db');
require('dotenv').config()
var app = express();

connectDB()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// register middleware
generalMiddleware(app)
apiRoutesMiddleware(app)
webRoutesMiddleware(app)
errorHandlingMiddleware(app)

module.exports = app;