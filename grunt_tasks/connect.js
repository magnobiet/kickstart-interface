/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		options: {
			port: 9000,
			livereload: true,
			hostname: 'localhost'
		},

		livereload: {
			options: {
				open: true,
				base: '<%= config.app %>'
			}
		}

	};

};
