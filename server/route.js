const router = require('express').Router();
const controller = require('./controller');

router.get('/album', controller.album.getAlbums);
// router.post('/album', controller.album.postAlbum);
// router.delete('/album', controller.album.deleteAlbum);

// router.get('/albumDetail', controller.albumDetail.getOne);
// router.post('/albumDetail', controller.albumDetail.postPhoto);
// router.delete('/albumDetail', controller.albumDetail.deletePhoto);

router.get('/cities', controller.cities.getAll);

module.exports = router;
