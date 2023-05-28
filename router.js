const homeRouter = require("./routes/home.js");


function routeHandler (app) {
    app.use('/', homeRouter);
}

module.exports = routeHandler;