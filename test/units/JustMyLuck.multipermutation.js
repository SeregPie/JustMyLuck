let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let Array_prototype_multipermutations = require('../core/Array/prototype/multipermutations');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let Stats = require('../Stats');

module.exports = function() {
	{
		let array = [1, 2, 3];
		[1, 2, 3, 4].forEach(count => {
			let stats = new Stats(Array_prototype_multipermutations(array, count));
			Array.from({length: l}).forEach(() => {
				let values = JustMyLuck.multipermutation(array, count);
				stats.inc(values);
			});
			assert(stats.deviation < permittedDeviation);
		});
	}
	assert.throws(() => {
		JustMyLuck.multipermutation([], 1);
	});
	assert.deepEqual(JustMyLuck.multipermutation([1], 3), [1, 1, 1]);
	assert.deepEqual(JustMyLuck.multipermutation([1, 2, 3], 0), []);
	assert.deepEqual(JustMyLuck.multipermutation([1, 2, 3], -1), []);
};
