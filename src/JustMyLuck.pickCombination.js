import './JustMyLuck.chance';
import './JustMyLuck.pick';
import './JustMyLuck.pickIndex';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';

JustMyLuck.extend({
	pickCombination(collection, k) {
		let array = Array_fromExceptLike(collection);
		let n = array.length;
		if (n > 1 && k > 1) {
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
			for (let i = n - k; i > 0; i--) {
				let index = this.pickIndex(array);
				array.splice(index, 1);
			}
			return array;
		}
		if (n > 0 && k > 0) {
			return [this.pick(array)];
		}
		return [];
	},
	combination(...args) {
		return this.pickCombination(...args);
	},
});
