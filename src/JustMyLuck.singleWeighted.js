import './JustMyLuck.float';
import './JustMyLuck.single';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';
import Array_prototype_last from './core/Array/prototype/last';
import Array_prototype_sum from './core/Array/prototype/sum';

JustMyLuck.extend({
	singleWeighted(weightedCollection) {
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
			return this.single(overweightedValues);
		}
		if (normalWeightedArray.length) {
			let values = [];
			let weights = [];
			normalWeightedArray
				.sort((a, b) => b[1] - a[1])
				.forEach(([value, weight]) => {
					values.push(value);
					weights.push(weight);
				});
			let maxWeight = weights[0];
			let minWeight = Array_prototype_last(weights);
			if (minWeight === maxWeight) {
				return this.single(values);
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
			return values[index];
		}
		return this.single(underweightedValues);
	},
});
