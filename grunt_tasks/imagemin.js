/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		options: {
			optimizationLevel: 4,
			progressive: true
		},

		dist: {
			files: [{
				expand: true,
				cwd: '<%= config.app %>assets/images/_sources/',
				src: [
					'{,*/}*.{png,jpg,gif}'
				],
				dest: '<%= config.app %>assets/images/'
			}]
		}

	};

};
