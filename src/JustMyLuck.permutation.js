import './JustMyLuck.integer';
import './JustMyLuck.single';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';

JustMyLuck.extend({
	permutation(collection, k) {
		let array = Array_fromExceptLike(collection);
		let n = array.length;
		k = Math.min(k, n);
		if (k > 0) {
			if (n > 1 === k > 1) {
				if (array === collection) {
					array = Array.from(array);
				}
				if (k > 1) {
					let result = [];
					for (; k > 0; k--, n--) {
						let index = this.integer(0, n);
						let value = array.splice(index, 1)[0];
						result.push(value);
					}
					return result;
				}
				return array;
			}
			return [this.single(array)];
		}
		return [];
	},
});
