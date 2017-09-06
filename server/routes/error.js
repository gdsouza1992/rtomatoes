const errorRoutes = {};

errorRoutes.get404 = (req, res) => {
	res.render('error');
}

module.exports = errorRoutes;