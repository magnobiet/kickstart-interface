/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		options: {
			htmlhintrc: '.htmlhintrc'
		},

		src: [
			'<%= config.app %>*.html',
			'!<%= config.app %>404.html'
		]

	};

};
