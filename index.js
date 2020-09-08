const express = require('express');
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

require('./controllers/indexController')(server);
require('./controllers/geeksController')(server);

server.listen(8080);
