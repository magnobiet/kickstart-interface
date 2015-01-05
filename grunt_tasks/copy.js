/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		main: {

			files: [{
				src: 'node_modules/apache-server-configs/dist/.htaccess',
				dest: '<%= config.app %>.htaccess'
			}]

		}

	};

};
