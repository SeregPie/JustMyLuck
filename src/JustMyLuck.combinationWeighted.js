import './JustMyLuck.singleWeighted';
import JustMyLuck from './JustMyLuck';

import Array_fromExcept from './core/Array/fromExcept';
import Array_prototype_combinations from './core/Array/prototype/combinations';

JustMyLuck.extend({
	combinationWeighted(weightedCollection, maxCount) {
		let weightedArray = Array_fromExcept(weightedCollection);
		let weightedArrayLength = weightedArray.length;
		let count = Math.min(weightedArrayLength, maxCount);
		if (count > 0) {
			return this.singleWeighted(Array_prototype_combinations(weightedArray, count).map(v => [
				v.map(v => v[0]),
				v.map(v => v[1]).reduce((r, n) => r + n, 0),
			]));
		}
		return [];
	},
	itemsWeighted(...args) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .itemsWeighted is deprecated. Use .combinationWeighted instead.');
		return this.combinationWeighted(...args);
	},
});
