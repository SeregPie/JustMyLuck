let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let Array_prototype_multicombinations = require('../core/Array/prototype/multicombinations');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let Stats = require('../Stats');

module.exports = function() {
	{
		let array = [1, 2, 3];
		[1, 2, 3, 4].forEach(count => {
			let stats = new Stats(Array_prototype_multicombinations(array, count));
			Array.from({length: l}).forEach(() => {
				let values = JustMyLuck.multicombination(array, count);
				try {
					stats.inc(values);
				} catch {
					console.log(count, values);
					throw 0;
				}
			});
			assert(stats.deviation < permittedDeviation);
		});
	}
	assert.deepEqual(JustMyLuck.multicombination([], 1), []);
	assert.deepEqual(JustMyLuck.multicombination([1], 3), [1, 1, 1]);
	assert.deepEqual(JustMyLuck.multicombination([1, 2, 3], 0), []);
	assert.deepEqual(JustMyLuck.multicombination([1, 2, 3], -1), []);
};
