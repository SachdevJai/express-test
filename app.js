require("dotenv").config();
const express = require("express");
const app = express();
const http = require('http');
const PORT = 3000;
const route = require('./router.js');
const bodyParser = require('body-parser');

global.app = app;

app.use(bodyParser.json());

const server = http.createServer(app);

route(app);

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})