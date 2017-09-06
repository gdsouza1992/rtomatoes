const express = require('express');
const router = express.Router();
const home = require('./home');
const movie = require('./movie');
const error = require('./error');


// GET home page.
router.route('/')
	.get(home.get);

//Add the movies route
router.route('/movies')
    .get(home.get);

//Add the movies/:movieId route
router.route('/movies/:movieId')
    .get(movie.getById);


router.route('*')
	.get(error.get404);

module.exports = router;