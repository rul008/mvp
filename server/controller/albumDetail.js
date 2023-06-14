const models = require('../models');

module.exports = {
  getOne(req, res) {
    console.log('controller', req.query);
    models.albumdetail.getAlbumDetail(req.query.id, (result, err) => {
      if (result) {
        res.status(200).send(result);
      } else {
        console.log(err);
        res.status(500).send('failed');
      }
    });
  },
};
