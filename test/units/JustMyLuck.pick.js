let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let Stats = require('../Stats');

module.exports = function() {
	{
		let array = [1, 2, 3];
		let stats = new Stats(array);
		Array.from({length: l}).forEach(() => {
			let value = JustMyLuck.pick(array);
			stats.inc(value);
		});
		assert(stats.deviation < permittedDeviation);
	}
	assert.throws(() => {
		JustMyLuck.pick([]);
	});
};
