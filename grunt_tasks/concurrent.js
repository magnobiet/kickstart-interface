/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		options: {
			logConcurrentOutput: true
		},

		tasks: [
			'sass',
			'newer:autoprefixer',
			'newer:imagemin',
			'assemble:pages'
		]

	};

};
