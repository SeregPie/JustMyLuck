import './JustMyLuck.pickIndex';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';

JustMyLuck.extend({
	pick(collection) {
		let array = Array_fromExceptLike(collection);
		return array[this.pickIndex(array)];
	},
	single: (() => {
		let warn = true;
		return function(...args) {
			if (warn) {
				console.warn('[JustMyLuck] The function `.single` is deprecated. Please use `.pick` instead.');
				warn = false;
			}
			return this.pick(...args);
		};
	})(),
});
