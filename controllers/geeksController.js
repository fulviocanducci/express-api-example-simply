const routeApiDefault = require('../utils/routeApiDefault');

const data = [
  {
    name: 'ricardo',
  },
];

const geeksController = (server) => {
  const route = routeApiDefault('geeks');
  server.get(route, (req, res) => {
    res.json(data);
  });
  server.post(route, (req, res) => {
    const { name } = req.body;
    data.push({ name });
    res.json(data);
  });
  return server;
};

module.exports = geeksController;
