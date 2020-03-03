import './JustMyLuck.integer';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';

JustMyLuck.extend({
	single(array) {
		array = Array_fromExceptLike(array);
		return array[this.integer(0, array.length)];
	},
	value(...args) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .value is deprecated. Use .single instead.');
		return this.single(...args);
	},
	item(...args) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .item is deprecated. Use .single instead.');
		return this.single(...args);
	},
	index(array) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .index is deprecated and will be removed in the future.');
		let arrayLength = array.length;
		let index = this.integer(0, arrayLength);
		return index;
	},
});
