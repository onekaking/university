/**
 * Log.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		objectType: {
			type: 'string',
			enum: ['CreateUser'],
			required: true
		},
		objectId: {
			type: 'string',
			required: true
		},
		message: {
			type: 'string'
		}
	}
};

