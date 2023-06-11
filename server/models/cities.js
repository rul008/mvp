const client = require('../dbConnection');

module.exports = {
  async getAll(params, cb) {
    const getQuery = `SELECT cities.index, cities.city, cities.lat,
    cities.lng, cities.country, cities.admin_name
    FROM cities JOIN city_user
    ON cities.index = city_user.city_id
    WHERE city_user.user_id = '${params.user_id}'`;
    try {
      const { rows } = await client.query(getQuery);
      cb(rows, null);
    } catch (err) {
      cb(null, err);
    }
  },
};
