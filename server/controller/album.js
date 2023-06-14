const models = require('../models');

module.exports = {
  getAlbums(req, res) {
    models.album.getAlbums(req.query, (result, err) => {
      if (result) {
        res.status(200).send(result);
      } else {
        console.log(err);
        res.status(500).send('failed');
      }
    });
  },
  getAlbum(req, res) {
    models.album.getAlbum(req.query, (result, err) => {
      if (result) {
        res.status(200).send(result);
      } else {
        console.log(err);
        res.status(500).send('failed');
      }
    });
  },
};
