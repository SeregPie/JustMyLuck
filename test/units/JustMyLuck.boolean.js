let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let Stats = require('../Stats');

module.exports = function() {
	let stats = new Stats([true, false]);
	Array.from({length: l}).forEach(() => {
		let boolean = JustMyLuck.boolean();
		stats.inc(boolean);
	});
	assert(stats.deviation < permittedDeviation);
};
