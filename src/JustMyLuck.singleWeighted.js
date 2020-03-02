import './JustMyLuck.float';
import './JustMyLuck.single';
import JustMyLuck from './JustMyLuck';

import Array_fromExcept from './core/Array/fromExcept';
import Array_fromExceptLike from './core/Array/fromExceptLike';
import Array_prototype_last from './core/Array/prototype/last';

JustMyLuck.extend({
	singleWeighted(weightedCollection) {
		let weightedArray = Array_fromExceptLike(weightedCollection);
		let weightedArrayLength = weightedArray.length;
		let positiveInfiniteWeightedArray = [];
		let positiveFiniteWeightedArray = [];
		let zeroWeightedArray = [];
		for (let i = 0; i < weightedArrayLength; i++) {
			let [value, weight] = weightedArray[i];
			if (weight > 0) {
				if (weight < Infinity) {
					positiveFiniteWeightedArray.push([value, weight]);
				} else {
					positiveInfiniteWeightedArray.push(value);
				}
			} else {
				zeroWeightedArray.push(value);
			}
		}
		if (positiveInfiniteWeightedArray.length) {
			return this.single(positiveInfiniteWeightedArray);
		}
		if (positiveFiniteWeightedArray.length) {
			positiveFiniteWeightedArray.sort((a, b) => b[1] - a[1]);
			let values = [];
			let weights = [];
			positiveFiniteWeightedArray.forEach(([value, weight]) => {
				values.push(value);
				weights.push(weight);
			});
			if (weights[0] === Array_prototype_last(weights)) {
				return this.single(values);
			}
			let totalWeight = weights.reduce((a, b) => a + b);
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
		return this.single(zeroWeightedArray);
	},
	valueWeighted(...args) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .valueWeighted is deprecated. Use .singleWeighted instead.');
		return this.singleWeighted(...args);
	},
	itemWeighted(...args) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .itemWeighted is deprecated. Use .singleWeighted instead.');
		return this.singleWeighted(...args);
	},
	indexWeighted(weightedArray) {
		// eslint-disable-next-line no-console
		console.warn('[JustMyLuck] DeprecationWarning: .indexWeighted is deprecated and will be removed in the future.');
		return this.singleWeighted(Array_fromExcept(weightedArray).map(([, weight], index) => [index, weight]));
	},
});
