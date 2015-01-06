/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		options: {
			flatten: true,
			partials: '<%= config.app %>views/partials/*.hbs',
			layouts: '<%= config.app %>views/layouts/',
			data: '<%= config.app %>views/data/*.json',
			layout: 'default.hbs'
		},

		pages: {
			src: ['<%= config.app %>views/*.hbs'],
			dest: '<%= config.app %>'
		}

	};

};
