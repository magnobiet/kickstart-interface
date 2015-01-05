/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		options: {
			sourcemap: 'none', // auto, file, inline, none
			style: 'compressed', // nested, compact, compressed, expanded
			trace: true,
			update: true,
			unixNewlines: true
		},

		standard: {
			files: [{
				expand: true,
				cwd: '<%= config.app %>assets/stylesheets/_scss/',
				dest: '<%= config.app %>assets/stylesheets/',
				ext: '.css',
				src: [
					'{,*/}*.scss'
				]
			}]
		}

	};

};
