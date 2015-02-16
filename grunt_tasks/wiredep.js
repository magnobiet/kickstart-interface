/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		options: {
			cwd: './'
		},

		task: {
			src: [
				'<%= config.app %>assets/stylesheets/_scss/*.scss'
			]
		}

	};

};
