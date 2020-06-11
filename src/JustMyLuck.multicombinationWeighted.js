import './JustMyLuck.multicombination';
import './JustMyLuck.singleWeighted';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';
import Array_prototype_multicombinations from './core/Array/prototype/multicombinations';
import Array_prototype_sum from './core/Array/prototype/sum';

JustMyLuck.extend({
	multicombinationWeighted(weightedCollection, k) {
		let weightedArray = Array_fromExceptLike(weightedCollection);
		let array0 = [];
		let array1 = [];
		let array2 = [];
		for (let i = 0, n = weightedArray.length; i < n; i++) {
			let [value, weight] = weightedArray[i];
			if (weight > 0) {
				if (weight < Infinity) {
					array1.push([value, weight]);
				} else {
					array0.push(value);
				}
			} else {
				array2.push(value);
			}
		}
		if (array0.length) {
			return this.multicombination(array0, k);
		}
		if (array1.length) {
			return this.singleWeighted(Array_prototype_multicombinations(array1, k).map(v => [
				v.map(v => v[0]),
				Array_prototype_sum(v.map(v => v[1])),
			]));
		}
		return this.multicombination(array2, k);
	},
});
