const axios = require('axios');

const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    // check if dev exists
    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `http://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = response.data;
      const techsArray = parseStringAsArray(techs);
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };

      // register new dev
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return res.json(dev);
  },

  async update(req, res) {
    const { github_username, name, bio, techs, latitude, longitude } = req.body;

    const dev = await Dev.findOne({ github_username });

    if (!dev) {
      return res.status(400).json({ error: 'User not found' });
    }

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    };

    const upDev = await dev.update({
      name,
      bio,
      techs,
      location
    });

    return res.json(upDev);
  },

  async delete(req, res) {
    const dev = await Dev.find({ _id: req.params.id });
    if (!dev) {
      return res.status(400).json({ error: 'dev with this id doesn`t exists' });
    }

    dev.deleteOne({ _id: req.params.id });
    return res.json();
  }
};
