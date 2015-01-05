/* jshint node: true */
module.exports = function(grunt) {

	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.loadNpmTasks('assemble');

	grunt.initConfig({

		config: grunt.file.readJSON('config.json'),

		watch: require('./grunt_tasks/watch')(),
		connect: require('./grunt_tasks/connect')(),

		// Hint
		htmlhint: require('./grunt_tasks/htmlhint')(),
		jshint: require('./grunt_tasks/jshint')(),

		// SASS/CSS
		sass: require('./grunt_tasks/sass')(),
		cmq: require('./grunt_tasks/cmq')(),
		autoprefixer: require('./grunt_tasks/autoprefixer')(),
		cssmin: require('./grunt_tasks/cssmin')(),

		// Handlebars
		assemble: require('./grunt_tasks/assemble')(),

		// Minify
		imagemin: require('./grunt_tasks/imagemin')(),
		uglify: require('./grunt_tasks/uglify')(),

		// Helpers
		githooks: require('./grunt_tasks/githooks')(),
		copy: require('./grunt_tasks/copy')(),

		concurrent: require('./grunt_tasks/concurrent')()

	});

	grunt.registerTask('prepare', [
		'githooks'
	]);

	grunt.registerTask('server', 'Start the server and preview your app, --allow-remote for remote access.', function() {

		if (grunt.option('allow-remote')) {
			grunt.config.set('connect.options.hostname', '*');
		}

		grunt.task.run([
			'concurrent',
			'connect:livereload',
			'watch'
		]);

	});

	grunt.registerTask('build', [
		'sass',
		'autoprefixer',
		'cssmin',
		'imagemin',
		'assemble:pages',
		'jshint',
		'uglify'
	]);

	grunt.registerTask('validate', [
		'htmlhint',
		'jshint'
	]);

	grunt.registerTask('default', [
		'server'
	]);

};
