var mongoose = require('mongoose');
module.exports = function (app) {
	var api = {};
	//Solicitando o modelo 'Foto'
	var model = mongoose.model('Foto');

	api.lista = function (req, res) {

		model.find()
			.then(function(fotos){
				res.json(fotos);
			}, function(error){
				console.log(error);
				res.sendStatus(500);
			})

	}
	api.buscaId = function (req, res) {

	}

	api.removeId = function (req, res) {

	}

	api.adiciona = function (req, res) {

	}

	api.atualiza = function (req, res) {


	}
	return api;
}