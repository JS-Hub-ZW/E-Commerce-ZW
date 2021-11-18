// Web routes
const indexRouter = require('./src/routes/web');

module.exports =  (app) => {
    app.use('/', indexRouter);
}