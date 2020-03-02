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
	string(alphabet, length) {
		alphabet = Array_fromExceptLike(alphabet);
		let result = '';
		while (length > 0) {
			result += this.single(alphabet);
			length--;
		}
		return result;
	},
});
