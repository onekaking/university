/**
 * Image.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		url: {
			type: 'string',
			required: true
		},
		type: {
			type: 'string',
			required: true,
			enum: ['UserAvatar', 'SchoolAvatar', 'SchoolArticle']
		},
		objectId: {
			type: 'string',
			required: true
		},
		createdBy: {
			model: 'user'
		}
	}
};

