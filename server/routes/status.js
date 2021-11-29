var express = require('express');
const mongodb = require('mongodb');

var router = express.Router();

router.get('/', async function (req, res, next) {
  const playlists = await loadPlaylists();
  const albums = await loadAlbums();

  res.send({albums: await albums.find({}).project({ items: 0, _id: 0 }).limit(5).toArray(), playlists: await playlists.find({}).project({ items: 0, _id: 0 }).limit(5).toArray() });
});

async function loadPlaylists() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://michael:hasemann@cluster0.intkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true
    }
  );

  return client.db('myapp').collection('playlists');
}

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
