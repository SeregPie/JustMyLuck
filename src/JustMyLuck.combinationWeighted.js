import './JustMyLuck.combination';
import './JustMyLuck.singleWeighted';
import JustMyLuck from './JustMyLuck';

import Array_fromExceptLike from './core/Array/fromExceptLike';
import Array_prototype_combinations from './core/Array/prototype/combinations';
import Array_prototype_sum from './core/Array/prototype/sum';

JustMyLuck.extend({
	combinationWeighted(weightedCollection, k) {
		let weightedArray = Array_fromExceptLike(weightedCollection);
		let array0 = [];
		let array1 = [];
		let array2 = [];
		let values = [];
		for (let index = 0, n = weightedArray.length; index < n; index++) {
			let [value, weight] = weightedArray[index];
			if (weight > 0) {
				if (weight < Infinity) {
					array1.push([index, weight]);
				} else {
					array0.push(index);
				}
			} else {
				array2.push(index);
			}
			values.push(value);
		}
		let indexes = new Set();
		if (k > 0 && array0.length) {
			this.combination(array0, k).forEach(index => {
				indexes.add(index);
				k--;
			});
		}
		{
			let n = array1.length;
			if (k > 0 && n) {
				this.singleWeighted(Array_prototype_combinations(array1, Math.min(k, n)).map(v => [
					v.map(v => v[0]),
					Array_prototype_sum(v.map(v => v[1])),
				])).forEach(index => {
					indexes.add(index);
					k--;
				});
			}
		}
		if (k > 0 && array2.length) {
			this.combination(array2, k).forEach(index => {
				indexes.add(index);
			});
		}
		return values.filter((value, index) => indexes.has(index));
	},
});
