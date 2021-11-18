const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express')

module.exports = (app) => {
    app.use(logger('dev')); //logging development info
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
}