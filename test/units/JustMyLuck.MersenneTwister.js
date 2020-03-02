let assert = require('assert').strict;

let JustMyLuck = require('../../index');

module.exports = function() {
	let random = JustMyLuck.MersenneTwister(Date.now());
	Array.from({length: 100}).forEach(() => {
		let float = random();
		assert(0 <= float && float < 1);
	});
};
