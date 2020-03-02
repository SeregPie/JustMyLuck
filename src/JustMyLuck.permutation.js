import './JustMyLuck.single';
import JustMyLuck from './JustMyLuck';

import Array_fromExcept from './core/Array/fromExcept';
import Array_prototype_permutations from './core/Array/prototype/permutations';

JustMyLuck.extend({
	permutation(collection, maxCount) {
		let array = Array_fromExcept(collection);
		let arrayLength = array.length;
		let count = Math.min(arrayLength, maxCount);
		if (count > 0) {
			return this.single(Array_prototype_permutations(array, count));
		}
		return [];
	},
});
