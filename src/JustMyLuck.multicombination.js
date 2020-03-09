import './JustMyLuck.chance';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';
import Array_ofLength from './core/Array/ofLength';

JustMyLuck.extend({
	multicombination(array, k) {
		array = Array_fromExceptLike(array);
		let n = array.length;
		if (n > 0) {
			if (n > 1) {
				let result = [];
				for (let i = 0; k > 0 && n > 0;) {
					if (this.chance(k / (k + n - 1))) {
						result.push(array[i]);
						k--;
					} else {
						i++;
						n--;
					}
				}
				return result;
			}
			let value = array[0];
			return Array_ofLength(k).fill(value);
		}
		return [];
	},
});
