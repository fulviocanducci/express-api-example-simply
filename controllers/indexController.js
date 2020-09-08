const routeApiDefault = require('../utils/routeApiDefault');

const indexController = (server) => {
  const route = routeApiDefault('');
  server.get(route, (req, res) => {
    res.json({ name: 'Web Rest Api', version: '1.0.0' });
  });
  return server;
};

module.exports = indexController;
