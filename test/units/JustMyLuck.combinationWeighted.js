let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let Array_prototype_combinations = require('../core/Array/prototype/combinations');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let WeightedStats = require('../WeightedStats');

module.exports = function() {
	{
		let array = [1, 2, 3, 4, 5];
		let weightedArray = array.map(value => [value, JustMyLuck.integer(1, 9)]);
		[1, 2, 3, 4].forEach(count => {
			let stats = new WeightedStats(Array_prototype_combinations(weightedArray, count).map(v => [
				v.map(v => v[0]),
				v.map(v => v[1]).reduce((r, n) => r + n, 0),
			]));
			Array.from({length: l}).forEach(() => {
				let values = JustMyLuck.combinationWeighted(weightedArray, count);
				stats.inc(values);
			});
			assert(stats.deviation < permittedDeviation);
		});
	}
	assert.deepEqual(JustMyLuck.combinationWeighted([], 1), []);
	assert.deepEqual(JustMyLuck.combinationWeighted([['a', 3], ['b', 1], ['c', 2]], 9), ['a', 'b', 'c']);
	assert.deepEqual(JustMyLuck.combinationWeighted([['a', 3], ['b', 1], ['c', 2]], 0), []);
	assert.deepEqual(JustMyLuck.combinationWeighted([['a', 3], ['b', 1], ['c', 2]], -1), []);
	//assert.deepEqual(JustMyLuck.combinationWeighted([['a', Infinity], ['b', 1], ['c', Infinity]], 2), ['a', 'c']);
	//assert.deepEqual(JustMyLuck.combinationWeighted([['a', Infinity], ['b', 1], ['c', Infinity]], 3), ['a', 'b', 'c']);
	//assert.deepEqual(JustMyLuck.combinationWeighted([['a', 3], ['b', 0], ['c', 2]], 2), ['a', 'c']);
	//assert.deepEqual(JustMyLuck.combinationWeighted([['a', 3], ['b', 0], ['c', 2]], 2), ['a', 'b', 'c']);
};
