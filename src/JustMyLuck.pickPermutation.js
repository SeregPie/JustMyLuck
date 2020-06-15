import './JustMyLuck.pick';
import './JustMyLuck.pickIndex';
import './JustMyLuck.shuffleInPlace';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';

JustMyLuck.extend({
	pickPermutation(collection, k) {
		let array = Array_fromExceptLike(collection);
		let n = array.length;
		if (n > 1 && k > 1) {
			if (array === collection) {
				array = Array.from(array);
			}
			if (k < n) {
				let result = [];
				for (; k > 0; k--) {
					let index = this.pickIndex(array);
					let value = array.splice(index, 1)[0];
					result.push(value);
				}
				return result;
			}
			return this.shuffleInPlace(array);
		}
		if (n > 0 && k > 0) {
			return [this.pick(array)];
		}
		return [];
	},
	permutation(...args) {
		return this.pickPermutation(...args);
	},
});
