/**
* Role.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		name: {
			type: 'string'
		},
		description: {
			type: 'string'
		},
		value: {
			type: 'integer',
			enum: [1,2,5,7]
		},
		permissions: {
			collection: 'permission',
			via: 'role'
		}
	}
};

