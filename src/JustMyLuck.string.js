import './JustMyLuck.single';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';

import alphabetic from './core/String/alphabetic';
import alphanumeric from './core/String/alphanumeric';
import lowerCasedAlphabetic from './core/String/lowerCasedAlphabetic';
import lowerCasedAlphanumeric from './core/String/lowerCasedAlphanumeric';
import numeric from './core/String/numeric';
import upperCasedAlphabetic from './core/String/upperCasedAlphabetic';
import upperCasedAlphanumeric from './core/String/upperCasedAlphanumeric';

Object.assign(JustMyLuck, {
	alphabetic,
	alphanumeric,
	lowerCasedAlphabetic,
	lowerCasedAlphanumeric,
	numeric,
	upperCasedAlphabetic,
	upperCasedAlphanumeric,
});

JustMyLuck.extend({
	string(array, k) {
		array = Array_fromExceptLike(array);
		let n = array.length;
		if (n > 0) {
			if (n > 1) {
				let result = '';
				for (; k > 0; k--) {
					result += this.single(array);
				}
				return result;
			}
			let value = `${array[0]}`;
			return value.repeat(k);
		}
		return '';
	},
});
