const client = require('../dbConnection');

module.exports = {
  async getAlbumDetail(params, cb) {
    console.log('cc', params);
    const id = params;
    const getQuery = `SELECT photo.photo_url,photo.comment
    FROM photo JOIN album
    ON photo.album_id = album.id
    WHERE album.id = ${id}`;
    try {
      console.log(getQuery);
      const { rows } = await client.query(getQuery);
      cb(rows, null);
    } catch (err) {
      cb(null, err);
    }
  },


};