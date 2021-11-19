// API routes
const apiRouter = require('../routes/api')


module.exports =  (app) => {
    app.use('/api/', apiRouter);
}