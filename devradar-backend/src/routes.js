const { Router } = require('express');

const routes = Router();

routes.post('/devs', (req, res) => {
  return res.json({ ok: true });
});

module.exports = routes;
