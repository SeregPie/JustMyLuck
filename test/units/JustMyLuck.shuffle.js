let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let Array_prototype_permutations = require('../core/Array/prototype/permutations');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let Stats = require('../Stats');

module.exports = function() {
	{
		let array = [1, 2, 3, 4, 5];
		Array.from({length: 100}).forEach(() => {
			let shuffledArray = JustMyLuck.shuffle(array);
			assert.equal(shuffledArray.length, array.length);
			assert(array.every(value => shuffledArray.includes(value)));
			assert(shuffledArray.every(value => array.includes(value)));
		});
	}
	{
		let array = [1, 2, 3];
		let stats = new Stats(Array_prototype_permutations(array, array.length));
		Array.from({length: l}).forEach(() => {
			let shuffledArray = JustMyLuck.shuffle(array);
			stats.inc(shuffledArray);
		});
		assert(stats.deviation < permittedDeviation);
	}
	assert.deepEqual(JustMyLuck.shuffle([1]), [1]);
	assert.deepEqual(JustMyLuck.shuffle([]), []);
};
