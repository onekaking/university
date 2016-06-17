/**
 * IndexController
 *
 * @description :: Server-side logic for managing Indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
	index: function(req, res) {
		return res.view('homepage');
	},

	admin: function(req, res) {
		return res.view('index');
	},

	input: function(req, res) {
		return res.view('input');
	}
};

