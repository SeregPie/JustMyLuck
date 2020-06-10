let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let WeightedStats = require('../WeightedStats');

module.exports = function() {
	{
		let p = 1/3;
		let stats = new WeightedStats([
			[true, p],
			[false, 1 - p],
		]);
		Array.from({length: l}).forEach(() => {
			let b = JustMyLuck.chance(p);
			stats.inc(b);
		});
		assert(stats.deviation < permittedDeviation);
	}
	assert.equal(JustMyLuck.chance(-Infinity), false);
	assert.equal(JustMyLuck.chance(-4), false);
	assert.equal(JustMyLuck.chance(-1), false);
	assert.equal(JustMyLuck.chance(-1/2), false);
	assert.equal(JustMyLuck.chance(0), false);
	assert.equal(JustMyLuck.chance(1), true);
	assert.equal(JustMyLuck.chance(3), true);
	assert.equal(JustMyLuck.chance(Infinity), true);
};
