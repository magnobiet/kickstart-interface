/* global APP */
var HOME = (function(window, document, $, undefined) {

	'use strict';

	function mainBanner() {

		APP.cycle('#slider .list', {
			prev: '#slider .prev',
			next: '#slider .next',
			pager: '#slider-pager',
			centerHorz: true,
			centerVert: true
		});

	}

	function init() {

		if ($(document).width() >= 1024) {
			mainBanner();
		}

	}

	return {
		init: init
	};

}(window, document, jQuery));

HOME.init();
