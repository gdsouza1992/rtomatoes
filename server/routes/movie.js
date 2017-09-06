
const utils = require('../../lib/utils');

const movieRoutes = {};
movieRoutes.getById = (req, res) => {
	const movieId = req.params.movieId;
	const AUDIENCE_THRESHOLD = 60;
	
	//GET the data from REST API or Database
	const movieData = require('../../data/take-home-movie');
	const articles = require('../../data/take-home-articles');

	const movie = movieData.data;
	// console.log(articles);
	movie.attributes.tomatometer.reviewCount = utils.numberWithCommas(parseInt(movie.attributes.tomatometer.freshCount) + parseInt(movie.attributes.tomatometer.rottenCount));
	movie.attributes.tomatometer.freshCount = utils.numberWithCommas(movie.attributes.tomatometer.freshCount);
	movie.attributes.tomatometer.rottenCount = utils.numberWithCommas(movie.attributes.tomatometer.rottenCount);
	movie.attributes.audience.ratingsCount = utils.numberWithCommas(movie.attributes.audience.ratingsCount);
	res.render('movieDetails', {
			movie,
			articles
		}
	);
}

module.exports = movieRoutes;