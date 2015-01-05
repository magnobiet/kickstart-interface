/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		options: {
			jshintrc: '.jshintrc',
			reporter: require('jshint-stylish')
		},

		all: [
			'!<%= config.app %>Gruntfile.js',
			'<%= config.app %>assets/javascripts/{,*/}*.js',
			'!<%= config.app %>assets/javascripts/*.min.js',
			'!<%= config.app %>assets/javascripts/plugins.js',
			'!<%= config.app %>assets/javascripts/vendors/*',
			'!<%= config.app %>assets/javascripts/plugins/*'
		]

	};

};
