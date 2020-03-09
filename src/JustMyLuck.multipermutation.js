import './JustMyLuck.single';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';
import Array_ofLength from './core/Array/ofLength';

JustMyLuck.extend({
	multipermutation(array, k) {
		array = Array_fromExceptLike(array);
		let n = array.length;
		if (n > 0) {
			if (n > 1) {
				let result = [];
				for (; k > 0; k--) {
					result.push(this.single(array));
				}
				return result;
			}
			let value = array[0];
			return Array_ofLength(k).fill(value);
		}
		return [];
	},
	itemsRepeated(...args) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .itemsRepeated is deprecated. Use .multipermutation instead.');
		return this.multipermutation(...args);
	},
	permutationRepeated(...args) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .permutationRepeated is deprecated. Use .multipermutation instead.');
		return this.multipermutation(...args);
	},
});
