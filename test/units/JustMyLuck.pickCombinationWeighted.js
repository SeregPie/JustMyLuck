require('lodash.combinations');
let _ = require('lodash');
let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let WeightedStats = require('../WeightedStats');

module.exports = function() {
	{
		let array = [1, 2, 3, 4, 5];
		let weightedArray = array.map(value => [value, JustMyLuck.integer(1, 9)]);
		[1, 2, 3, 4].forEach(count => {
			let stats = new WeightedStats(_.combinations(weightedArray, count).map(v => [
				v.map(v => v[0]),
				v.map(v => v[1]).reduce((r, n) => r + n, 0),
			]));
			Array.from({length: l}).forEach(() => {
				let values = JustMyLuck.pickCombinationWeighted(weightedArray, count);
				stats.inc(values);
			});
			assert(stats.deviation < permittedDeviation);
		});
	}
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([], -4), []);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([], 0), []);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([], 1), []);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([['a', 1]], -4), []);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([['a', 1]], 0), []);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([['a', 1]], 1), ['a']);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([['a', 1]], 3), ['a']);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([['a', 3], ['b', 1], ['c', 2]], -4), []);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([['a', 3], ['b', 1], ['c', 2]], 0), []);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([['a', 3], ['b', 1], ['c', 2]], 3), ['a', 'b', 'c']);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([['a', 3], ['b', 1], ['c', 2]], 9), ['a', 'b', 'c']);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([['a', Infinity], ['b', 1], ['c', Infinity]], 2), ['a', 'c']);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([['a', Infinity], ['b', 1], ['c', Infinity]], 3), ['a', 'b', 'c']);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([['a', 0], ['b', 1], ['c', -4]], 1), ['b']);
	assert.deepEqual(JustMyLuck.pickCombinationWeighted([['a', 0], ['b', 1], ['c', -4]], 3), ['a', 'b', 'c']);
};
