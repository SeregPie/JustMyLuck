import './JustMyLuck.single';
import JustMyLuck from './JustMyLuck';

import Array_fromExcept from './core/Array/fromExcept';
import Array_prototype_combinations from './core/Array/prototype/combinations';

JustMyLuck.extend({
	combination(collection, maxCount) {
		let array = Array_fromExcept(collection);
		let arrayLength = array.length;
		let count = Math.min(arrayLength, maxCount);
		if (count > 0) {
			return this.single(Array_prototype_combinations(array, count));
		}
		return [];
	},
	items(...args) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .items is deprecated. Use .combination instead.');
		return this.combination(...args);
	},
});
