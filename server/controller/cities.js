const models = require('../models');

module.exports = {
  getAll(req, res) {
    models.cities.getAll(req.query, (result, err) => {
      if (result) {
        res.status(200).send(result);
      } else {
        console.log(err);
        res.status(500).send('failed');
      }
    });
  },
};
