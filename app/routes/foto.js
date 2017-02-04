module.exports = function (app) {

	var api = app.api.foto;
	app.route('/v1/fotos')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/fotos/:id')
		.get(api.buscaId)
		.delete(api.removeId);

};