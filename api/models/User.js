/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
//var bcrypt = require('bcrypt');

module.exports = {

	attributes: {
		username: {
			type: 'string',
			required: true
		},
		password: {
			type: 'string',
			required: true
		},
		permissions: {
			collection: 'permission',
			via: 'users'
		},
		toJSON: function() {
			var obj = this.toObject();
			//delete obj.password;
			return obj;
		}
	},

	// beforeCreate: function(user, cb) {
	// 	bcrypt.genSalt(10, function(err, salt) {
	// 	  	bcrypt.hash(user.password, salt, function(err, hash) {
	// 		    if (err) {
	// 		      	cb(err);
	// 		    } else {
	// 		      	user.password = hash;
	// 		      	cb(null, user);
	// 		    }
	// 		});
	// 	});
	// },

	afterCreate: function(user, cb) {
		Log.create({
			type: 'CreateUser',
			objectId: user.id
		}).exec(function() {
			cb(null, user);
		});
	}
};

