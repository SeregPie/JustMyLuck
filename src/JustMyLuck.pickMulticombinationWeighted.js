import './JustMyLuck.pickMulticombination';
import './JustMyLuck.pickWeighted';
import JustMyLuck from './JustMyLuck';

import Array_fromExcept from './core/Array/fromExcept';
import Array_prototype_multicombinations from './core/Array/prototype/multicombinations';
import Array_prototype_sum from './core/Array/prototype/sum';

JustMyLuck.extend({
	pickMulticombinationWeighted(weightedCollection, k) {
		let normalWeightedArray = [];
		let upperArray = [];
		let lowerArray = [];
		Array_fromExcept(weightedCollection).forEach(([value, weight]) => {
			if (weight > 0) {
				if (weight < Infinity) {
					normalWeightedArray.push([value, weight]);
				} else {
					upperArray.push(value);
				}
			} else {
				lowerArray.push(value);
			}
		});
		if (upperArray.length) {
			return this.pickMulticombination(upperArray, k);
		}
		if (normalWeightedArray.length) {
			return this.pickWeighted(Array_prototype_multicombinations(normalWeightedArray, k).map(v => [
				v.map(v => v[0]),
				Array_prototype_sum(v.map(v => v[1])),
			]));
		}
		return this.pickMulticombination(lowerArray, k);
	},
	multicombinationWeighted: (() => {
		let warn = true;
		return function(...args) {
			if (warn) {
				console.warn('[JustMyLuck] The function `.multicombinationWeighted` is deprecated. Please use `.pickMulticombinationWeighted` instead.');
				warn = false;
			}
			return this.pickMulticombinationWeighted(...args);
		};
	})(),
});
