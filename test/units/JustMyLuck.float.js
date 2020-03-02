let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let Stats = require('../Stats');

module.exports = function() {
	{
		let min = -1;
		let max = min + 4;
		Array.from({length: 100}).forEach(() => {
			let float = JustMyLuck.float(min, max);
			assert(min <= float && float < max);
		});
	}
	assert.throws(() => {
		let float = 1;
		JustMyLuck.float(float, float);
	});
	{
		let min = -1;
		let max = min + 4;
		Array.from({length: 100}).forEach(() => {
			let float = JustMyLuck.float(min, max, true);
			assert(min <= float && float <= max);
		});
	}
	{
		let n = 10;
		let luck = new JustMyLuck(() => JustMyLuck.integer(0, n) / n);
		let stats = new Stats(Array.from({length: n + 1}, (v, i) => i / n));
		Array.from({length: l}).forEach(() => {
			let float = luck.float(0, 1, true);
			stats.inc(float);
		});
		assert(stats.deviation < permittedDeviation);
	}
	{
		let float = 1;
		assert.equal(JustMyLuck.float(float, float, true), float);
	}
};
