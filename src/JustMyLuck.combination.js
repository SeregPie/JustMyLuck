import './JustMyLuck.chance';
import JustMyLuck from './JustMyLuck';

import Array_fromExcept from './core/Array/fromExcept';

JustMyLuck.extend({
	combination(array, k) {
		array = Array_fromExcept(array);
		if (k > 0) {
			let n = array.length;
			return array.filter(() => {
				let b = this.chance(k / n);
				if (b) {
					k--;
				}
				n--;
				return b;
			});
		}
		return [];
	},
	items(...args) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .items is deprecated. Use .combination instead.');
		return this.combination(...args);
	},
});
