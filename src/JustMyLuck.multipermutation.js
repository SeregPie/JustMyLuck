import './JustMyLuck.single';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';
import Array_ofLength from './core/Array/ofLength';

JustMyLuck.extend({
	multipermutation(array, k) {
		array = Array_fromExceptLike(array);
		let n = array.length;
		if (k > 0) {
			if (n > 1) {
				let result = [];
				for (; k > 0; k--) {
					result.push(this.single(array));
				}
				return result;
			}
			if (n > 0) {
				let value = array[0];
				return Array_ofLength(k).fill(value);
			}
		}
		return [];
	},
});
