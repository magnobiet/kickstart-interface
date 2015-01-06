/* global FastClick */
var APP = (function(window, document, $, undefined) { // jshint ignore:line

	'use strict';

	/* AUTOLOAD ***************************************************************/

	(function() {

		// Avoid `console` errors in browsers that lack a console.
		var method,
			noop = function() {},
			methods = [
				'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
				'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
				'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
				'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
			],
			length = methods.length,
			console = (window.console = window.console || {});

		while (length--) {

			method = methods[length];

			if (!console[method]) {
				console[method] = noop;
			}

		}

		// Set jQuery validate defaults
		$.validator.setDefaults({
			debug: true,
			ignore: '.ignore, :hidden:not(select), .chosen-search input',
			errorClass: 'error',
			validClass: 'success',
			errorElement: 'span',
			ignoreTitle: true,
			highlight: function(element, errorClass, validClass) {

				if ($(element).next().hasClass('chosen-container')) {
					$(element).next().find('> a').removeClass(validClass).addClass(errorClass);
				} else {
					$(element).removeClass(validClass).addClass(errorClass);
				}

			},
			unhighlight: function(element, errorClass, validClass) {

				if ($(element).next().hasClass('chosen-container')) {
					$(element).next().find('> a').addClass(validClass).removeClass(errorClass);
				} else {
					$(element).removeClass(errorClass).addClass(validClass);
				}

			}
		});

		// Enable FastClick
		FastClick.attach(document.body);

	}());

	/* PRIVATE ****************************************************************/

	function dispatcher() {
		return window[$('body').data('dispatcher').toUpperCase()].init();
	}

	// Based on head.js
	function browserDetect() {

		var browser = null,
			version = null,
			ua = window.navigator.userAgent.toLowerCase(),
			mobile = /mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(ua),
			chromeOrFirefox = /(chrome|firefox)[ \/]([\w.]+)/.exec(ua),
			ios = /(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(ua),
			mobileWebkit = /(android)(?:.*version)?[ \/]([\w.]+)/.exec(ua),
			safariOrOpera = /(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua),
			msie = /(msie) ([\w.]+)/.exec(ua),
			trident = /(trident).+rv:(\w.)+/.exec(ua);

		ua = chromeOrFirefox || ios || mobileWebkit || safariOrOpera || msie || trident || [];

		browser = ua[1];
		version = parseFloat(ua[2]);

		switch (browser) {
			case 'msie':
			case 'trident':
				browser = 'ie';
				version = document.documentMode || version;
				break;

			case 'firefox':
				browser = 'ff';
				break;

			case 'ipod':
			case 'ipad':
			case 'iphone':
				browser = 'ios';
				break;

			case 'webkit':
				browser = 'safari';
				break;
		}

		return {
			isMobile: mobile,
			name: browser,
			version: version
		};

	}

	function features2Html() {

		var browser = browserDetect(),
			device = browser.isMobile ? 'mobile ' : 'desktop ';

		$('html').addClass(device + browser.name + ' ' + browser.name + '-' + browser.version);

	}

	function setMask() {

		$('input[data-mask]').each(function() {
			var input = $(this);
			input.setMask(input.data('mask'));
		});

		// Set jQuery MeioMask defaults
		$.mask.options = {
			autoTab: false,
			setSize: true
		};

	}

	/* PUBLIC *****************************************************************/
	function cycle(target, config) {

		var configDefault = {
			fx: 'fade',
			log: false,
			swipe: true,
			slides: 'li',
			timeout: 25000,
			pauseOnHover: true,
			pagerActiveClass: 'active',
			pagerTemplate: '<span class="item">&bull;</span>'
		};

		$.extend(configDefault, config);

		if (!configDefault.log) {
			$.fn.cycle.log = $.noop;
		}

		if (configDefault.pager) {
			var pager = (configDefault.pager).replace('.', '').replace('#', '');
			$(target).after('<div id="' + pager + '" class="' + pager + '" />');
		}

		$(target).cycle(configDefault);

	}

	function init() {

		features2Html();

		$(window).on('load', function() {

			dispatcher();

		});

		if ($('form').length) {
			setMask();
		}

	}

	return {
		cycle: cycle,
		init: init
	};

}(window, document, jQuery)).init();
