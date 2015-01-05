/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		options: {
			log: true
		},

		standard: {

			files: {
				'<%= config.app %>assets/stylesheets/': [
					'<%= config.app %>assets/stylesheets/*.css'
				]
			}

		}

	};

};
