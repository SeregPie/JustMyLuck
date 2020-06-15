import './JustMyLuck.pickMultipermutation';
import './JustMyLuck.pickWeighted';
import JustMyLuck from './JustMyLuck';

import Array_fromExcept from './core/Array/fromExcept';
import Array_prototype_multipermutations from './core/Array/prototype/multipermutations';
import Array_prototype_sum from './core/Array/prototype/sum';

JustMyLuck.extend({
	pickMultipermutationWeighted(weightedCollection, k) {
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
			return this.pickMultipermutation(upperArray, k);
		}
		if (normalWeightedArray.length) {
			return this.pickWeighted(Array_prototype_multipermutations(normalWeightedArray, k).map(v => [
				v.map(v => v[0]),
				Array_prototype_sum(v.map(v => v[1])),
			]));
		}
		return this.pickMultipermutation(lowerArray, k);
	},
	multipermutationWeighted(...args) {
		return this.pickMultipermutationWeighted(...args);
	},
});
