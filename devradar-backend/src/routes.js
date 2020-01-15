const { Router } = require('express');

const routes = Router();

routes.post('/devs', (req, res) => {
  const { github_username } = req.body;

  return res.json({ ok: true });
});

module.exports = routes;
