import './JustMyLuck.pickCombination';
import './JustMyLuck.pickWeighted';
import JustMyLuck from './JustMyLuck';

import Array_fromExcept from './core/Array/fromExcept';
import Array_prototype_combinations from './core/Array/prototype/combinations';
import Array_prototype_sum from './core/Array/prototype/sum';

JustMyLuck.extend({
	pickCombinationWeighted(weightedCollection, k) {
		let normalWeightedArray = [];
		let upperArray = [];
		let lowerArray = [];
		let values = [];
		Array_fromExcept(weightedCollection).forEach(([value, weight], index) => {
			values.push(value);
			if (weight > 0) {
				if (weight < Infinity) {
					normalWeightedArray.push([index, weight]);
				} else {
					upperArray.push(index);
				}
			} else {
				lowerArray.push(index);
			}
		});
		let indexes = new Set();
		if (k > 0 && upperArray.length) {
			this.pickCombination(upperArray, k).forEach(index => {
				indexes.add(index);
				k--;
			});
		}
		(() => {
			let n = normalWeightedArray.length;
			if (n > 0 && k > 0) {
				return this.pickWeighted(Array_prototype_combinations(normalWeightedArray, Math.min(k, n)).map(v => [
					v.map(v => v[0]),
					Array_prototype_sum(v.map(v => v[1])),
				]));
			}
			return [];
		})().forEach(index => {
			indexes.add(index);
			k--;
		});
		if (k > 0 && lowerArray.length) {
			this.pickCombination(lowerArray, k).forEach(index => {
				indexes.add(index);
			});
		}
		return values.filter((value, index) => indexes.has(index));
	},
	combinationWeighted(...args) {
		return this.pickCombinationWeighted(...args);
	},
});
