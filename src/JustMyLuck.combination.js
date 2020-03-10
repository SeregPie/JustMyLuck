import './JustMyLuck.chance';
import './JustMyLuck.integer';
import './JustMyLuck.single';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';

JustMyLuck.extend({
	combination(collection, k) {
		let array = Array_fromExceptLike(collection);
		let n = array.length;
		k = Math.min(k, n);
		if (k > 0) {
			if (n > 1 === k > 1) {
				if (k < n / 2) {
					let result = [];
					for (let i = 0; k > 0 && n > 0; i++, n--) {
						if (this.chance(k / n)) {
							result.push(array[i]);
							k--;
						}
					}
					return result;
				}
				if (array === collection) {
					array = Array.from(array);
				}
				if (k > 1) {
					for (let i = n - k; i > 0; i--, n--) {
						let index = this.integer(0, n);
						array.splice(index, 1);
					}
				}
				return array;
			}
			return [this.single(array)];
		}
		return [];
	},
	items(...args) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .items is deprecated. Use .combination instead.');
		return this.combination(...args);
	},
});
