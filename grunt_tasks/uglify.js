/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		options: {
			sourceMap: false,
			banner: '<%= config.banner %>'
		},

		plugins: {
			files: {
				'<%= config.app %>assets/javascripts/plugins.js': [
					'<%= config.app %>assets/javascripts/plugins/*'
				]
			}
		}

	};

};
