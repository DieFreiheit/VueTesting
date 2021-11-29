var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var statusRouter = require('./routes/status');
var playlistsRouter = require('./routes/playlists');
var albumsRouter = require('./routes/albums');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/status', statusRouter);
app.use('/api/playlists', playlistsRouter);
app.use('/api/albums', albumsRouter);

module.exports = app;
