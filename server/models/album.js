const client = require('../dbConnection');

module.exports = {
  async getAlbums(params, cb) {
    let getQuery = `SELECT cities.city,cities.country,
    cities.admin_name, album.cover, album._date
    FROM cities JOIN album
    ON cities.index = album.city_id`;
    if (params.city) {
      getQuery += ` WHERE cities.index = ${params.city}`;
    } else if (params.year) {
      getQuery += ` WHERE album._date >= '${params.year}-1-1' and  album._date <= '${params.year}-12-30'`;
    }
    try {
      console.log(getQuery);
      const { rows } = await client.query(getQuery);
      cb(rows, null);
    } catch (err) {
      cb(null, err);
    }
  },
};
