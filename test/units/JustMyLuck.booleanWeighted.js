let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let WeightedStats = require('../WeightedStats');

module.exports = function() {
	{
		let weight = 3;
		let stats = new WeightedStats([
			[true, weight],
			[false, 1],
		]);
		Array.from({length: l}).forEach(() => {
			let boolean = JustMyLuck.booleanWeighted(weight);
			stats.inc(boolean);
		});
		assert(stats.deviation < permittedDeviation);
	}
	assert.equal(JustMyLuck.booleanWeighted(-Infinity), false);
	assert.equal(JustMyLuck.booleanWeighted(-4), false);
	assert.equal(JustMyLuck.booleanWeighted(-1), false);
	assert.equal(JustMyLuck.booleanWeighted(-1/2), false);
	assert.equal(JustMyLuck.booleanWeighted(0), false);
	assert.equal(JustMyLuck.booleanWeighted(Infinity), true);
};
