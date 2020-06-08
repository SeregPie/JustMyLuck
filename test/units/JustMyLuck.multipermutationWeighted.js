let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let Array_prototype_multipermutations = require('../core/Array/prototype/multipermutations');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let WeightedStats = require('../WeightedStats');

module.exports = function() {
	{
		let array = [1, 2, 3];
		let weightedArray = array.map(value => [value, JustMyLuck.integer(1, 9)]);
		[1, 2, 3, 4].forEach(count => {
			let stats = new WeightedStats(Array_prototype_multipermutations(weightedArray, count).map(v => [
				v.map(v => v[0]),
				v.map(v => v[1]).reduce((r, n) => r + n, 0),
			]));
			Array.from({length: l}).forEach(() => {
				let values = JustMyLuck.multipermutationWeighted(weightedArray, count);
				stats.inc(values);
			});
			assert(stats.deviation < permittedDeviation);
		});
	}
	assert.deepEqual(JustMyLuck.multipermutationWeighted([], 1), []);
	assert.deepEqual(JustMyLuck.multipermutationWeighted([['a', 1]], 3), ['a', 'a', 'a']);
	assert.deepEqual(JustMyLuck.multipermutationWeighted([['a', 3], ['b', 1], ['c', 2]], 0), []);
	assert.deepEqual(JustMyLuck.multipermutationWeighted([['a', 3], ['b', 1], ['c', 2]], -1), []);
	assert.deepEqual(JustMyLuck.multipermutationWeighted([['a', 3], ['b', Infinity], ['c', 2]], 2), ['b', 'b']);
	assert.deepEqual(JustMyLuck.multipermutationWeighted([['a', 0], ['b', 1], ['c', 0]], 2), ['b', 'b']);
};
