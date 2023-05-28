const homeRouter = require('./routes/home');
const spotifyRouter = require('./routes/spotify');


function routeHandler (app) {
    app.use('/', homeRouter);
    app.use('/spotify', spotifyRouter);
}

module.exports = routeHandler;