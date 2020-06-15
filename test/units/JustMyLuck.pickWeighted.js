let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let WeightedStats = require('../WeightedStats');

module.exports = function() {
	{
		let array = [1, 2, 3];
		let weightedArray = array.map(value => [value, JustMyLuck.integer(1, 9)]);
		let stats = new WeightedStats(weightedArray);
		Array.from({length: l}).forEach(() => {
			let value = JustMyLuck.pickWeighted(weightedArray);
			stats.inc(value);
		});
		assert(stats.deviation < permittedDeviation);
	}
	assert.throws(() => {
		JustMyLuck.pickWeighted([]);
	});
	assert.equal(JustMyLuck.pickWeighted([['a', 3], ['b', Infinity], ['c', 2]]), 'b');
	assert.equal(JustMyLuck.pickWeighted([['a', 0], ['b', 1], ['c', -4]]), 'b');
};
