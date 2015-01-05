/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		options: {
			browsers: [
				'> 1%',
				'last 6 versions',
				'Firefox ESR',
				'Opera 12.1'
			]
		},

		standard: {
			files: [{
				expand: true,
				flatten: true,
				src: '<%= config.app %>assets/stylesheets/{,*/}*.css',
				dest: '<%= config.app %>assets/stylesheets/'
			}]
		}

	};

};
