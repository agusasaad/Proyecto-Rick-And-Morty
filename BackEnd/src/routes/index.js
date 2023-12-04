var express = require('express');
var Router = express.Router();
const getCharById = require('../controllers/getCharById');
const {postFav, deleteFav} = require('../controllers/Favorites')
const login = require('../controllers/login')


Router.get('/character/:id', getCharById)
Router.get('/login', login)
Router.post('/fav', postFav)
Router.delete('/fav/:id', deleteFav)

module.exports = Router