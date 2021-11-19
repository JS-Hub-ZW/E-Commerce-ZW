// Web routes
const webRouter = require('../routes/web');

module.exports =  (app) => {
    app.use('/', webRouter);
}