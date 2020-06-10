import './JustMyLuck.multipermutation';
import './JustMyLuck.singleWeighted';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';
import Array_prototype_multipermutations from './core/Array/prototype/multipermutations';
import Array_prototype_sum from './core/Array/prototype/sum';

JustMyLuck.extend({
	multipermutationWeighted(weightedCollection, k) {
		let weightedArray = Array_fromExceptLike(weightedCollection);
		let overweightedValues = [];
		let normalWeightedArray = [];
		let underweightedValues = [];
		for (let i = 0, n = weightedArray.length; i < n; i++) {
			let [value, weight] = weightedArray[i];
			if (weight > 0) {
				if (weight < Infinity) {
					normalWeightedArray.push([value, weight]);
				} else {
					overweightedValues.push(value);
				}
			} else {
				underweightedValues.push(value);
			}
		}
		if (overweightedValues.length) {
			return this.multipermutation(overweightedValues, k);
		}
		if (normalWeightedArray.length) {
			return this.singleWeighted(Array_prototype_multipermutations(normalWeightedArray, k).map(v => [
				v.map(v => v[0]),
				Array_prototype_sum(v.map(v => v[1])),
			]));
		}
		return this.multipermutation(underweightedValues, k);
	},
});
