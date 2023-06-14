const client = require('../dbConnection');

module.exports = {
  async getAlbums(params, cb) {
    const getQuery = `SELECT cities.city,cities.country,
    cities.admin_name, album.cover, album._date, users.user_name, album.id
    FROM cities JOIN album
    ON cities.index = album.city_id
    JOIN users
    ON users.id = album.user_id
    WHERE album.public = TRUE`;
    try {
      console.log(getQuery);
      const { rows } = await client.query(getQuery);
      cb(rows, null);
    } catch (err) {
      cb(null, err);
    }
  },

  async getAlbum(params, cb) {
    console.log('cc');
    let getQuery = `SELECT cities.city,cities.country,
    cities.admin_name, album.cover, album._date, album.public, album.id
    FROM cities JOIN album
    ON cities.index = album.city_id
    WHERE user_id = 5`;
    if (params.city) {
      getQuery += ` and cities.index = ${params.city}`;
    } else if (params.year) {
      getQuery += ` and album._date >= '${params.year}-1-1' and  album._date <= '${params.year}-12-30'`;
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
