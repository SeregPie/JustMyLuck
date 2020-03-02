let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let Array_prototype_permutations = require('../core/Array/prototype/permutations');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let Stats = require('../Stats');

module.exports = function() {
	{
		let array = [1, 2, 3, 4, 5];
		[1, 2, 3, 4].forEach(count => {
			let stats = new Stats(Array_prototype_permutations(array, count));
			Array.from({length: l}).forEach(() => {
				let values = JustMyLuck.permutation(array, count);
				stats.inc(values);
			});
			assert(stats.deviation < permittedDeviation);
		});
	}
	assert.deepEqual(JustMyLuck.permutation([], 1), []);
	assert.deepEqual(JustMyLuck.permutation([1], 3), [1]);
	assert.deepEqual(JustMyLuck.permutation([1, 2, 3], 0), []);
	assert.deepEqual(JustMyLuck.permutation([1, 2, 3], -1), []);
};
