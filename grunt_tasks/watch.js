/* jshint node: true */
module.exports = function() {

	'use strict';

	return {

		options: {
			livereload: '<%= connect.options.livereload %>'
		},

		html: {
			files: [
				'<%= config.app %>.html'
			],
			tasks: [
				'newer:htmlhint'
			]
		},

		hbs: {
			files: [
				'<%= config.app %>views/{,*/}*.hbs',
				'<%= config.app %>data/*.json'
			],
			tasks: [
				'assemble:pages'
			]
		},

		scss: {
			files: '<%= config.app %>assets/stylesheets/_scss/{,*/}*.scss',
			tasks: [
				'sass'
			]
		},

		css: {
			files: '<%= config.app %>assets/stylesheets/*.css',
			tasks: [
				'newer:cmq',
				'newer:autoprefixer'
			]
		},

		img: {
			files: '<%= config.app %>assets/images/{,*/}*',
			tasks: [
				'newer:imagemin'
			]
		},

		js: {
			files: '<%= config.app %>assets/javascripts/*.js',
			tasks: [
				'newer:jshint'
			]
		},

		plugins: {
			files: '<%= config.app %>assets/javascripts/plugins/*.js',
			tasks: [
				'newer:uglify:plugins'
			]
		}

	};

};
