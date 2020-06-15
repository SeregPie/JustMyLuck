import './JustMyLuck.float';
import './JustMyLuck.pick';
import JustMyLuck from './JustMyLuck';

import Array_fromExcept from './core/Array/fromExcept';
import Array_prototype_last from './core/Array/prototype/last';
import Array_prototype_sum from './core/Array/prototype/sum';

JustMyLuck.extend({
	pickWeighted(weightedCollection) {
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
			return this.pick(upperArray);
		}
		if (normalWeightedArray.length) {
			let weights = [];
			let array = normalWeightedArray
				.sort((a, b) => b[1] - a[1])
				.map(([value, weight]) => {
					weights.push(weight);
					return value;
				});
			let maxWeight = weights[0];
			let minWeight = Array_prototype_last(weights);
			if (minWeight === maxWeight) {
				return this.pick(array);
			}
			weights = weights.map(weight => weight / maxWeight);
			let totalWeight = Array_prototype_sum(weights);
			let totalWeightFraction = this.float(0, totalWeight);
			let index = weights.findIndex(weight => {
				totalWeightFraction -= weight;
				return totalWeightFraction < 0;
			});
			if (index < 0) {
				index = 0;
			}
			return array[index];
		}
		return this.pick(lowerArray);
	},
	singleWeighted: (() => {
		let warn = true;
		return function(...args) {
			if (warn) {
				console.warn('[JustMyLuck] The function `.singleWeighted` is deprecated. Please use `.pickWeighted` instead.');
				warn = false;
			}
			return this.pickWeighted(...args);
		};
	})(),
});
