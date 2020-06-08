let assert = require('assert').strict;

let JustMyLuck = require('../../index');

module.exports = function() {
	let array = [1, 2, 3, 4, 5];
	let shuffledArray = JustMyLuck.shuffleInPlace(array);
	assert.equal(shuffledArray, array);
};
