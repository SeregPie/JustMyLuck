require('lodash.multipermutations');
let _ = require('lodash');
let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let Stats = require('../Stats');

module.exports = function() {
	{
		let array = [1, 2, 3];
		[1, 2, 3, 4].forEach(count => {
			let stats = new Stats(_.multipermutations(array, count));
			Array.from({length: l}).forEach(() => {
				let values = JustMyLuck.multipermutation(array, count);
				stats.inc(values);
			});
			assert(stats.deviation < permittedDeviation);
		});
	}
	assert.deepEqual(JustMyLuck.multipermutation([], -4), []);
	assert.deepEqual(JustMyLuck.multipermutation([], 0), []);
	assert.deepEqual(JustMyLuck.multipermutation([], 1), []);
	assert.deepEqual(JustMyLuck.multipermutation([1], -4), []);
	assert.deepEqual(JustMyLuck.multipermutation([1], 0), []);
	assert.deepEqual(JustMyLuck.multipermutation([1], 1), [1]);
	assert.deepEqual(JustMyLuck.multipermutation([1], 3), [1, 1, 1]);
	assert.deepEqual(JustMyLuck.multipermutation([1, 2, 3], -4), []);
	assert.deepEqual(JustMyLuck.multipermutation([1, 2, 3], 0), []);
	assert.equal(JustMyLuck.multipermutation([1, 2, 3], 9).length, 9);
};
