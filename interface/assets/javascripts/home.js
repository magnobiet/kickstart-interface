var HOME = (function(window, document, $, undefined) { // jshint ignore:line

	'use strict';

	function myMethodName() {

		console.info('HOME.myMethodName() called.');

	}

	function init() {

		myMethodName();

	}

	return {
		init: init
	};

}(window, document, jQuery));
