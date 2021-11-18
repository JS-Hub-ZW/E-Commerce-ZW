// API routes
const apiRouter = require('./src/routes/api')


module.exports =  (app) => {
    app.use('/', apiRouter);
}