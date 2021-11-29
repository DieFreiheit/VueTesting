var express = require('express');
const mongodb = require('mongodb');

var router = express.Router();

router.get('/', async function (req, res, next) {
  const albums = await loadAlbums();

  res.send(await albums.find({}).project({ items: 0, _id: 0 }).toArray());
});

router.get('/:id', async function (req, res, next) {
  const albums = await loadAlbums();

  res.send(await albums.findOne({ plid: req.params.id }));
});

async function loadAlbums() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://michael:hasemann@cluster0.intkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true
    }
  );

  return client.db('myapp').collection('albums');
}

module.exports = router;
