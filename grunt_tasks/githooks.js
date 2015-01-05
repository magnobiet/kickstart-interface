/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		all: {
			'pre-commit': 'sass uglify jshint',
		}

	};

};
