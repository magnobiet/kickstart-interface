/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		minify: {
			expand: true,
			cwd: '<%= config.app %>assets/stylesheets/',
			src: [
				'*.css',
				'!*.min.css'
			],
			dest: '<%= config.app %>assets/stylesheets/',
			ext: '.css'
		}

	};

};
