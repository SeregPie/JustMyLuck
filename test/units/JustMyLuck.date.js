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
			let date = JustMyLuck.date(new Date(min), new Date(max));
			stats.inc(date.getTime());
		});
		assert(stats.deviation < permittedDeviation);
	}
	assert.throws(() => {
		let date = new Date('08 Dec 1987');
		JustMyLuck.date(date, date);
	});
	{
		let date = new Date('08 Dec 1987');
		assert.equal(JustMyLuck.date(date, date, true).getTime(), date.getTime());
	}
};
