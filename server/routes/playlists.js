var express = require('express');
const mongodb = require('mongodb');

var router = express.Router();

router.get('/', async function (req, res, next) {
  const playlists = await loadPlaylists();

  res.send(await playlists.find({}).project({ items: 0, _id: 0 }).toArray());
});

router.get('/:id', async function (req, res, next) {
  const playlists = await loadPlaylists();
  //const albums = await loadPostsCollection();

  res.send(await playlists.findOne({ plid: req.params.id }));
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

module.exports = router;
