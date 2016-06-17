/**
 * UniversityController
 *
 * @description :: Server-side logic for managing Universities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	indexView: function(req, res) {
    return res.view('School');
  }
};

