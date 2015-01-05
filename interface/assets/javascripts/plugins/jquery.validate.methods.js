(function(factory) {

	if (typeof define === 'function' && define.amd) { // jshint ignore:line
		define(['jquery', '../jquery.validate'], factory); // jshint ignore:line
	} else {
		factory(jQuery);
	}

}(function($) {

	$.validator.addMethod('cpf', function(value, element) {

		value = jQuery.trim(value);

		value = value.replace('.', '');
		value = value.replace('.', '');
		var cpf = value.replace('-', '');
		while (cpf.length < 11) cpf = '0' + cpf;
		var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
		var a = [];
		var b = new Number;
		var c = 11;
		for (var i = 0; i < 11; i++) {
			a[i] = cpf.charAt(i);
			if (i < 9) b += (a[i] * --c);
		}
		if ((x = b % 11) < 2) {
			a[9] = 0;
		} else {
			a[9] = 11 - x;
		}
		b = 0;
		c = 11;
		for (var y = 0; y < 10; y++) b += (a[y] * c--);
		if ((x = b % 11) < 2) {
			a[10] = 0;
		} else {
			a[10] = 11 - x;
		}

		var retorno = true;
		if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)) retorno = false;

		return this.optional(element) || retorno;

	}, 'Informe um CPF válido.');

	$.validator.addMethod('cnpj', function(value, element) {

		var numbers,
			digits,
			sum,
			i,
			result,
			pos,
			size,
			iquals = 1,
			cnpj = jQuery.trim(value);

		cnpj = cnpj.replace('/', '');
		cnpj = cnpj.replace('.', '');
		cnpj = cnpj.replace('.', '');
		cnpj = cnpj.replace('-', '');

		if (cnpj.length < 14 && cnpj.length < 15) {
			return this.optional(element) || false;
		}

		for (i = 0; i < cnpj.length - 1; i++) {

			if (cnpj.charAt(i) !== cnpj.charAt(i + 1)) {
				iquals = 0;
				break;
			}

		}

		if (!iquals) {

			size = cnpj.length - 2;
			numbers = cnpj.substring(0, size);
			digits = cnpj.substring(size);
			sum = 0;
			pos = size - 7;

			for (i = size; i >= 1; i--) {

				sum += numbers.charAt(size - i) * pos--;

				if (pos < 2) {
					pos = 9;
				}

			}

			result = sum % 11 < 2 ? 0 : 11 - sum % 11;

			if (result !== digits.charAt(0)) {
				return this.optional(element) || false;
			}

			size = size + 1;
			numbers = cnpj.substring(0, size);
			sum = 0;
			pos = size - 7;

			for (i = size; i >= 1; i--) {

				sum += numbers.charAt(size - i) * pos--;

				if (pos < 2) {
					pos = 9;
				}

			}

			result = sum % 11 < 2 ? 0 : 11 - sum % 11;

			if (result !== digits.charAt(1)) {
				return this.optional(element) || false;
			}

			return this.optional(element) || true;

		} else {

			return this.optional(element) || false;

		}

	}, 'Informe um CNPJ válido.');

	$.validator.addMethod('password', function(value) {

		/*
			- Passwords will contain at least 1 upper case letter
			- Passwords will contain at least 1 lower case letter
			- Passwords will contain at least 1 number or special character
			- Passwords will contain at least 8 characters in length
			- Password maximum length should not be arbitrarily limited
			*/

		return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);

	}, 'Informe uma senha válida.');

	$.validator.addMethod('dateBR', function(value) { // dd/mm/aaaa

		var date = value,
			day = date.substr(0, 2),
			firstDivider = date.substr(2, 1),
			month = date.substr(3, 2),
			secondDivider = date.substr(5, 1),
			year = date.substr(6, 4);

		if (value.length !== 10) {
			return false;
		}

		if (date.length !== 10 || firstDivider !== '/' || secondDivider !== '/' || isNaN(day) || isNaN(month) || isNaN(year) || day > 31 || month > 12) {
			return false;
		}

		if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
			return false;
		}

		if (month === 2 && (day > 29 || (day === 29 && year % 4 !== 0))) {
			return false;
		}

		if (year < 1900) {
			return false;
		}

		return true;

	}, 'Informe uma data válida');

	$.validator.addMethod('cardDate', function(value) { // mm/aa

		var date = value,
			currentYear = new Date().getFullYear().toString(),
			divider = date.substr(2, 1),
			month = date.substr(0, 2),
			year = date.substr(3, 2);

		if (value.length !== 5) {
			return false;
		}

		if (date.length !== 5 || divider !== '/' || isNaN(month) || isNaN(year) || month > 12 || month < 1) {
			return false;
		}

		if (month === 4 || month === 6 || month === 9 || month === 11) {
			return false;
		}

		if (month === 2 && year % 4 !== 0) {
			return false;
		}

		if (year < currentYear.replace(currentYear.substr(0, 2), '')) {
			return false;
		}

		return true;

	}, 'Informe uma data válida');

}));
