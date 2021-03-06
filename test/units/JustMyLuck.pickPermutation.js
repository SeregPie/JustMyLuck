require('lodash.permutations');
let _ = require('lodash');
let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let Stats = require('../Stats');

module.exports = function() {
	{
		let array = [1, 2, 3, 4, 5];
		[1, 2, 3, 4].forEach(count => {
			let stats = new Stats(_.permutations(array, count));
			Array.from({length: l}).forEach(() => {
				let values = JustMyLuck.pickPermutation(array, count);
				stats.inc(values);
			});
			assert(stats.deviation < permittedDeviation);
		});
	}
	assert.deepEqual(JustMyLuck.pickPermutation([], -4), []);
	assert.deepEqual(JustMyLuck.pickPermutation([], 0), []);
	assert.deepEqual(JustMyLuck.pickPermutation([], 1), []);
	assert.deepEqual(JustMyLuck.pickPermutation([1], -4), []);
	assert.deepEqual(JustMyLuck.pickPermutation([1], 0), []);
	assert.deepEqual(JustMyLuck.pickPermutation([1], 1), [1]);
	assert.deepEqual(JustMyLuck.pickPermutation([1], 3), [1]);
	assert.deepEqual(JustMyLuck.pickPermutation([1, 2, 3], -4), []);
	assert.deepEqual(JustMyLuck.pickPermutation([1, 2, 3], 0), []);
	assert.equal(JustMyLuck.pickPermutation([1, 2, 3], 9).length, 3);
};
