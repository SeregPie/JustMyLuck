let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let Stats = require('../Stats');

module.exports = function() {
	{
		let min = -1;
		let max = min + 4;
		let stats = new Stats(Array.from({length: max - min}, (v, i) => i + min));
		Array.from({length: l}).forEach(() => {
			let integer = JustMyLuck.integer(min, max);
			stats.inc(integer);
		});
		assert(stats.deviation < permittedDeviation);
	}
	assert.equal(JustMyLuck.integer(4.3, 6.5), 5);
	assert.throws(() => {
		let integer = 1;
		JustMyLuck.integer(integer, integer);
	});
	{
		let integer = 1;
		assert.equal(JustMyLuck.integer(integer, integer, true), integer);
	}
};
